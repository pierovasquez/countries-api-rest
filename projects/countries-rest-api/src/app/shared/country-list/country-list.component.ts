import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() countrySelected: EventEmitter<Country> = new EventEmitter<Country>();

  constructor(
    private countryListService: CountryListService
  ) { }

  ngOnInit(): void {
    this.countries$ = this.countryListService.countryList$;
  }

  onCountrySelected(selectedCountry: Country) {
    this.countrySelected.next(selectedCountry);
  }

}
