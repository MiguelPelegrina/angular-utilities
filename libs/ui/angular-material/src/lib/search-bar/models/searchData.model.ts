export class SearchData {
  public term = '';
  public filters = [];

  constructor(options: Partial<SearchData> = {}) {
    this.term = options.term ?? '';
    this.filters = options.filters ?? [];
  }
}
