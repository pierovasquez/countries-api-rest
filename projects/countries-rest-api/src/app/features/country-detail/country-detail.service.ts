import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Country } from '../../shared/country-list/country-list-factory';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class CountryDetailService {

  constructor(
    private http: HttpClient
  ) { }


  getCountryByName(name: string): Observable<Country | null> {
    const params = new HttpParams()
      .set('fields', 'name;nativeName;topLevelDomain;population;currencies;region;languages;subregion;capital;borders;flag;alpha3Code;')
      .set('fullText', 'true');
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/name/' + decodeURI(name), { params })
      .pipe(
        map((countryList) => {
          const country = countryList[0];
          country.currenciesCode = country.currencies.map(cur => cur.code);
          country.languagesName = country.languages.map(lang => lang.name);
          return country;
        }),
        switchMap(country => {
          this.getCountryNamesByBorders(country.borders).subscribe(borders => {
            country.bordersName = borders.map(border => border.name);
          });
          return of(country);
        }),
        catchError(error => this.handleError(error)));
  }

  getCountryNamesByBorders(borders: string[]): Observable<{ name: string }[]> {
    const parsedBorders = borders.join(';')
    const params = new HttpParams()
      .set('codes', parsedBorders)
      .set('fields', 'name');
    return this.http.get<{ name: string }[]>('https://restcountries.eu/rest/v2/alpha', { params });

  }

  private handleError(error: HttpErrorResponse) {
    console.log('error', error);
    return of(null);
  }
}
