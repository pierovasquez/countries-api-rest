import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../shared/country-list/country-list-factory';

@Component({
  selector: 'piero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCountrySelected(country: Country) {
    this.router.navigate([`/detail/${encodeURI(country.name)}`]);
  }

}
