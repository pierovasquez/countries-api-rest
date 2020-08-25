import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../shared/country-list/country-list-factory';

const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
@Component({
  selector: 'piero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filteredCountries: Country[];
  filterClear: boolean;
  regionOptions = REGION_OPTIONS;

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  onCountrySelected(country: Country) {
    this.router.navigate([`/detail/${encodeURI(country.name)}`]);
  }

}
