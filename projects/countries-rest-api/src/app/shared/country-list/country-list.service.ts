import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Country } from './country-list-factory';

@Injectable()
export class CountryListService {

  private filterFields = '?fields=name;nativeName;topLevelDomain;population;currencies;region;languages;subregion;capital;borders;flag;alpha3Code;';
  public countryList$ = this.http.get<Country[]>('https://restcountries.eu/rest/v2/all' + this.filterFields);

  constructor(
    private http: HttpClient
  ) { }
}
