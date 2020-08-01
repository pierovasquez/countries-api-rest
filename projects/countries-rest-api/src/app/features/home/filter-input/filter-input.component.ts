import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../home.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'piero-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit {

  faSearch = faSearch;

  @Output() filterClear: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
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
