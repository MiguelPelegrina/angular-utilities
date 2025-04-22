import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { FormControl } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';

/**
 * SearchBarComponent is a reusable search bar component.
 * It allows users to input search terms and emits the search term
 * after a specified debounce time.
 */
@Component({
  selector: 'lib-search-bar',
  imports: [MaterialModule, SharedModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss', '../../shared/styles/styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  // Fields
  searchControl = new FormControl('');

  // Inputs
  readonly placeholder = input<string>('Search...');
  readonly debounce = input<number>(300);
  // TODO Needs to be improved and tested
  readonly useService = input<boolean>(false);
  readonly width = input<string>('100%');
  readonly minWidth = input<string>();
  readonly maxWidth = input<string>();

  // Outputs
  readonly filter = output<string>();

  /**
   * Constructor for the SearchBarComponent.
   * @param searchService - The search service to use for searching.
   */
  constructor(private searchService: SearchService) {
    this.searchControl.setValue(this.searchService.getSearchTerm(), {
      emitEvent: false,
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce()), distinctUntilChanged())
      .subscribe((term) => {
        if (this.useService()) {
          this.searchService.updateSearchTerm(term || '');
        } else {
          this.filter.emit(term || '');
        }
      });
  }

  /**
   * Clears the search input.
   */
  clearSearch(): void {
    this.searchControl.setValue('');
  }
}
