import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTerm = new BehaviorSubject<string>('');

  clear(): void {
    this.searchTerm.next('');
  }

  getSearchTerm(): string {
    return this.searchTerm.value;
  }

  updateSearchTerm(term: string): void {
    this.searchTerm.next(term);
  }
}
