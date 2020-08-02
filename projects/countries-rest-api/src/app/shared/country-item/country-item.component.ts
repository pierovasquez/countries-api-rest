import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../country-list/country-list-factory';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'piero-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent implements OnInit {

  @Input() country: Country;

  @Output() countrySelected: EventEmitter<Country> = new EventEmitter<Country>();

  storedTheme: string;

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => this.storedTheme = theme);
  }

  onCountrySelected() {
    this.countrySelected.next(this.country);
  }
}
