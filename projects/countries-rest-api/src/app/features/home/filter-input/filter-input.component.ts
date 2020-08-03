import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../home.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ThemeService } from '../../../core/theme.service';

@Component({
  selector: 'piero-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit {

  faSearch = faSearch;

  @Output() filterClear: EventEmitter<boolean> = new EventEmitter<boolean>();
  storedTheme: string;

  constructor(
    private homeService: HomeService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => this.storedTheme = theme);
  }


  onInputFilterChanged(filter: InputEvent) {
    console.log('filter', filter);
    this.homeService.emitInputChange((filter.target as any).value);
    if (filter && filter.target && !(filter.target as any).value) {
      this.filterClear.next(true);
    }
  }

  onInputFilterClear() {
    this.filterClear.next(true);
  }

}
