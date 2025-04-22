import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  Input,
  input,
  OnInit,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { TableColumn } from '../../interfaces/table-column.interface';
import { Icon } from '../../../shared/interfaces/icon.inteface';
import { SearchBarComponent } from '../../../search-bar/components/search-bar.component';
import { SharedModule } from '../../../shared/modules/shared.module';
import { MaterialModule } from '../../../shared/modules/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { DataPropertyGetterPipe } from '../../pipes/data-property-getter.pipe';
import { Action } from '../../../shared/interfaces/action.interface';

/**
 * TableTemplateComponent is a reusable table component that provides
 * features such as sorting, pagination, filtering, and row actions.
 * It is designed to be flexible and customizable for various use cases.
 */
// TODO
// - Add swipe directive
// - Make filtering the problem of the parent component, not this component
// - https://material.angular.io/components/table/examples
//  - Sort not showing --> default sort with current table?
//  - (Output) selected rows
//  - (Sticky) header
//  - (Sticky) footer
//  - Reorderable
//  - Expandable
@Component({
  selector: 'lib-table-template',
  imports: [
    DataPropertyGetterPipe,
    MaterialModule,
    SearchBarComponent,
    SharedModule,
  ],
  templateUrl: './table-template.component.html',
  styleUrls: [
    './table-template.component.scss',
    '../../../shared/styles/styles.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableTemplateComponent<T> implements OnInit {
  //Fields
  actionRow = 'actions';
  iconsRow = 'icons';
  dataSource = signal<MatTableDataSource<T>>(new MatTableDataSource<T>());

  // Child components
  matPaginator = viewChild(MatPaginator);
  matSort = viewChild(MatSort);

  //Inputs
  data = input<T[]>([]);
  headerText = input<string>('');
  rowActionText = input<string>('Actions');
  rowIconsText = input<string>('Icons');
  isPageable = input(false);
  isSortable = input(false);
  isFilterable = input(false);
  hasMultipleSelection = input(false);
  columns = input<TableColumn[]>([]);
  paginationSizes = input<number[]>([5, 10, 25, 50, 100]);
  defaultPageSize = input(this.paginationSizes()[0]);
  rowIcons = input<Icon<T>[]>([]);
  rowActions = input<Action<T>[]>([]);

  // Outputs
  sort = output<Sort>();

  // TODO Refactor
  @Input() nextSwipeAction?: (object: T) => void;
  @Input() previousSwipeAction?: (object: T) => void;
  protected selection = new SelectionModel<T>(true, []);
  protected displayedColumns: string[] = [];
  // TODO Refactor

  /**
   * Constructor for the TableTemplateComponent.
   * Sets up the data source for the table and binds it to the paginator and sort.
   */
  constructor() {
    effect(() => {
      this.dataSource().sort = this.matSort() || null;
      this.dataSource().paginator = this.matPaginator() || null;
      this.dataSource().data = this.data();
    });
  }

  /**
   * Filters the data of the table based on the provided filter string.
   * @param filter - The filter string to apply to the table data.
   */
  applyFilter(filter: string) {
    this.dataSource().filter = filter.trim().toLowerCase();
  }

  // TODO Refactor
  /**
   * Initialization logic for setting up displayed columns.
   */
  ngOnInit(): void {
    this.displayedColumns = this.columns().map(
      (tableColumn: TableColumn) => tableColumn.label
    );

    if (this.rowActions() && this.rowActions().length > 0) {
      this.displayedColumns.push(this.actionRow);
    }

    if (this.rowIcons() && this.rowIcons().length > 0) {
      this.displayedColumns.push(this.iconsRow);
    }

    if (this.hasMultipleSelection()) {
      this.displayedColumns.splice(0, 0, 'select');
    }
  }
  // TODO Refactor

  /**
   * Executes the "Next" swipe action, if it was provided.
   * @param row - The element of the row
   */
  protected onNextSwipe(row: T) {
    if (this.nextSwipeAction) {
      this.nextSwipeAction(row);
    }
  }

  /**
   * Executes the "Previous" swipe action, if it was provided.
   * @param row - The element of the row
   */
  protected onPreviousSwipe(row?: T) {
    if (this.onPreviousSwipe) {
      this.onPreviousSwipe(row);
    }
  }

  /**
   * Handles the selected rows when using multiple selection in the table.
   * Used by check boxes.
   * @param row - Selected row through checking the box.
   */
  protected selectHandler(row: T) {
    if (!this.selection.isSelected(row)) {
      this.selection.clear();
    }

    this.selection.toggle(row);
  }

  /**
   * Emits the sort event with the given sort parameters.
   * @param sortParameters - The parameters defining the sort.
   */
  protected sortTable(sortParameters: Sort) {
    const activeDataKey = this.columns().find(
      (column) => column.label === sortParameters.active
    )?.key;

    if (activeDataKey) {
      sortParameters.active = activeDataKey;
      this.sort.emit(sortParameters);
    }
  }
}
