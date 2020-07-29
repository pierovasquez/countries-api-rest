import { Component, OnInit } from '@angular/core';
import { CountryDetailService } from './country-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, tap, switchMap } from 'rxjs/operators'
import { Country } from '../../shared/country-list/country-list-factory';

@Component({
  selector: 'piero-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  selectedCountry: Country;

  constructor(
    private countryDetailService: CountryDetailService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap(console.log),
      map(params => params.get('id')),
      switchMap(param => this.countryDetailService.getCountryByName(param))
    ).subscribe((selectedCountry: Country) => {
      console.log('detailedSelected', selectedCountry);
      this.selectedCountry = selectedCountry;
    }, error => console.log('error Ocurred'));
  }

  onBackSelected() {
    this.router.navigate(['/home']);
  }

}
