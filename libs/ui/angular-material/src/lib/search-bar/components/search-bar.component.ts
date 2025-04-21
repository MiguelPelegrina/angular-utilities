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

@Component({
  selector: 'lib-search-bar',
  imports: [MaterialModule, SharedModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  readonly placeholder = input<string>('Search...');
  readonly debounce = input<number>(300);
  readonly useService = input<boolean>(true);

  readonly filter = output<string>();

  searchControl = new FormControl('');

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

  clearSearch(): void {
    this.searchControl.setValue('');
  }
}
