import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../shared/country-list/country-list-factory';
import { HomeService } from './home.service';

@Component({
  selector: 'piero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filteredCountries: Country[];
  filterClear: boolean;

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.countryList$.subscribe(filteredCountries => {
      console.log('filteredCountries', filteredCountries);
      this.filterClear = false;
      this.filteredCountries = filteredCountries;
    });
  }

  onCountrySelected(country: Country) {
    this.router.navigate([`/detail/${encodeURI(country.name)}`]);
  }

  onFilterClear() {
    this.filterClear = true;
  }

}
