import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CountryListService } from './country-list.service';
import { Country } from './country-list-factory';
import { HomeService } from '../../features/home/home.service';
import { combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';


@Component({
  selector: 'piero-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  providers: [CountryListService]
})
export class CountryListComponent implements OnInit {
  private _countries: Country[];
  private searchFilter: string;
  private selectFilter: string;

  @Output() countrySelected: EventEmitter<Country> = new EventEmitter<Country>();


  constructor(
    private countryListService: CountryListService,
    private homeService: HomeService
  ) {
    // tslint:disable-next-line: max-line-length
    const filterObservables = combineLatest([this.homeService.inputChange$.pipe(startWith('')), this.homeService.selectChange$.pipe(startWith(''))]);

    filterObservables.subscribe(([input, select]) => {
      this.searchFilter = input ? input : '';
      this.selectFilter = select ? select : '';
    });
  }

  ngOnInit(): void {
    this.countryListService.countryList$.subscribe(countries => this._countries = countries);
  }

  onCountrySelected(selectedCountry: Country) {
    this.countrySelected.next(selectedCountry);
  }

  get countries() {
    return this._countries
      ? this._countries
          .filter(country =>
            this.searchFilter ? country.name.toLowerCase().includes(this.searchFilter) : country)
          .filter(country =>
            this.selectFilter ? country.region.includes(this.selectFilter) : country)
      : this._countries;
  }

}
