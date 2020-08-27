import { Component, OnInit } from '@angular/core';
import { CountryDetailService } from './country-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, tap, switchMap, filter } from 'rxjs/operators'
import { Country } from '../../shared/country-list/country-list-factory';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'piero-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  selectedCountry: Country;
  icon = faArrowLeft;
  storedTheme: string;

  constructor(
    private countryDetailService: CountryDetailService,
    private router: Router,
    private route: ActivatedRoute,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap((param: string) => this.countryDetailService.getCountryByName(param))
    ).subscribe((selectedCountry: Country) => {
      this.selectedCountry = selectedCountry;
    }, error => console.log('error Ocurred'));
    this.themeService.theme$.subscribe(theme => this.storedTheme = theme);
  }

  onBackSelected() {
    this.router.navigate(['/home']);
  }

  onBorderCountrySelected(borderCountry: string) {
    this.router.navigate([`/detail/${borderCountry}`]);
  }

}
