import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, filter } from 'rxjs/operators';
import { Country } from '../../shared/country-list/country-list-factory';

@Injectable()
export class HomeService {

  private $inputChange: Subject<string> = new Subject<string>();
  public inputChange$: Observable<string> = this.$inputChange.asObservable();

  private $countryList: Subject<Country[]> = new Subject<Country[]>();
  public countryList$: Observable<Country[]> = this.$countryList.asObservable();



  constructor(private http: HttpClient) {
    const inputChange$ = this.$inputChange.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    );
    inputChange$.pipe(
      tap(console.log),
      filter(filteredText => !!filteredText),
      switchMap(filteredText => {
        const params = new HttpParams()
          // tslint:disable-next-line: max-line-length
          .set('fields', 'name;nativeName;topLevelDomain;population;currencies;region;languages;subregion;capital;borders;flag;alpha3Code;');
        return this.http.get<Country[]>('https://restcountries.eu/rest/v2/name/' + filteredText, {params})
          .pipe(
            catchError(error => this.handleError(error))
          );
      })
    ).subscribe((countries: Country[]) => this.$countryList.next(countries));
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error', error);
    return of(null);
  }

  emitInputChange(filteredText: string) {
    this.$inputChange.next(filteredText);
  }
}
