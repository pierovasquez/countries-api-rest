import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CountryListService } from './country-list.service';
import { Country } from './country-list-factory';
import { HomeService } from '../../features/home/home.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'piero-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  providers: [CountryListService]
})
export class CountryListComponent implements OnInit {
  private _countries: Country[];
  private searchFilter: string;

  @Input() filterClear = true;
  @Output() countrySelected: EventEmitter<Country> = new EventEmitter<Country>();


  constructor(
    private countryListService: CountryListService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.filterClear = true;
    this.countryListService.countryList$.subscribe(countries => this._countries = countries);
    this.homeService.inputChange$.pipe(debounceTime(500), distinctUntilChanged()).subscribe(filter => this.searchFilter = filter);
  }

  onCountrySelected(selectedCountry: Country) {
    this.countrySelected.next(selectedCountry);
  }

  get countries() {
    return this._countries 
      ? this._countries.filter(country => 
          this.searchFilter ? country.name.toLowerCase().includes(this.searchFilter) : country) 
      : this._countries;
  }

}
