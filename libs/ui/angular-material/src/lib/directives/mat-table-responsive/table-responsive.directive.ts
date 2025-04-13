import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

// TODO Last element is shown differently, try to fix it.
/**
 * Directive responsible for making tables responsive and accessible by dinamically
 * updating DOM attributes based on changes in the table's structure or content.
 */
@Directive({
  selector: '[libTableResponsive]',
})
export class TableResponsiveDirective implements AfterViewInit, OnDestroy {
  private onDestroy$ = new Subject<boolean>();

  private thead!: HTMLTableSectionElement;
  private tbody!: HTMLTableSectionElement;

  // These variables monitor changes in the <thead> and <tbody> sections of the table
  private theadChanged$ = new BehaviorSubject(true);
  private tbodyChanged$ = new Subject<boolean>();
  private theadObserver = new MutationObserver(() =>
    this.theadChanged$.next(true)
  );
  private tbodyObserver = new MutationObserver(() =>
    this.tbodyChanged$.next(true)
  );

  /**
   * Constructor with dependency injections.
   * @param table - Service that allows to access the DOM element the directive is attached to.
   * @param renderer - Service that allow to interact safely with the DOM.
   */
  constructor(private table: ElementRef, private renderer: Renderer2) {}

  /**
   * A lifecycle hook that is called after Angular has fully initialized a component's view.
   * Queries the native element for its <thead> and <tbody> sections.
   * Starts observing these sections for changes using the mutation observers.
   */
  ngAfterViewInit() {
    this.thead = this.table.nativeElement.querySelector('thead');
    this.tbody = this.table.nativeElement.querySelector('tbody');

    this.theadObserver.observe(this.thead, {
      characterData: true,
      subtree: true,
    });
    this.tbodyObserver.observe(this.tbody, { childList: true });

    /**
     * Set the "data-column-name" attribute for every body row cell, either on
     * thead row changes (e.g. language changes) or tbody rows changes (add, delete).
     */
    combineLatest([this.theadChanged$, this.tbodyChanged$])
      .pipe(
        map(() => {
          const headRow = this.thead.rows.item(0);
          const bodyRows = this.tbody.rows;

          if (!headRow) {
            return { columnNames: [], rows: [] };
          }

          return {
            columnNames: Array.from(headRow.children).map(
              (headerCell) => headerCell.textContent || ''
            ),
            rows: Array.from(bodyRows).map((row) => Array.from(row.children)),
          };
        }),
        takeUntil(this.onDestroy$)
      )
      // Apply the data-column-name attribute to each cell in <tbody> rows based on the corresponding header cell's text.
      .subscribe(({ columnNames, rows }) =>
        rows.forEach((rowCells) =>
          rowCells.forEach((cell) =>
            this.renderer.setAttribute(
              cell,
              'data-column-name',
              columnNames[(cell as HTMLTableCellElement).cellIndex]
            )
          )
        )
      );
  }

  /**
   * Lifecycle hook that is called when the directive is destroyed. Used for any custom cleanup that needs to occur when the instance is destroyed.
   */
  ngOnDestroy(): void {
    this.theadObserver.disconnect();
    this.tbodyObserver.disconnect();

    this.onDestroy$.next(true);
  }
}
