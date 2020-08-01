import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CountryListService } from './country-list.service';
import { Observable } from 'rxjs';
import { Country } from './country-list-factory';

@Component({
  selector: 'piero-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  providers: [CountryListService]
})
export class CountryListComponent implements OnInit {

  countries$: Observable<Country[]>;
  private _countries: Country[];

  @Input() set countries(filteredCountries) {
    if (filteredCountries) {
      this._countries = filteredCountries;
    } else {
      this._countries = [];
    }
  }
  get countries() {
    return this._countries;
  }

  @Input() filterClear = true;
  @Output() countrySelected: EventEmitter<Country> = new EventEmitter<Country>();

  constructor(
    private countryListService: CountryListService
  ) { }

  ngOnInit(): void {
    this.filterClear = true;
    this.countries$ = this.countryListService.countryList$;
  }

  onCountrySelected(selectedCountry: Country) {
    this.countrySelected.next(selectedCountry);
  }

}
