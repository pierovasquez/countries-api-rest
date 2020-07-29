import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../country-list/country-list-factory';

@Component({
  selector: 'piero-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent implements OnInit {

  @Input() country: Country;

  @Output() countrySelected: EventEmitter<Country> = new EventEmitter<Country>();

  constructor() { }

  ngOnInit(): void {
  }

  onCountrySelected() {
    console.log('selectedCountr', this.country);
    this.countrySelected.next(this.country);
  }
}
