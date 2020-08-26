import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../home.service';

@Component({
  selector: 'piero-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {
  showOptions = false;

  selectedOption = '';

  @Input() placeholder: string;
  @Input() options: string[];

  icon = faChevronDown;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  select(value: string) {
    if (this.selectedOption === value) {
      this.selectedOption = '';
    } else {
      this.selectedOption = value;
    }
    this.homeService.emitSelectChange(this.selectedOption);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
