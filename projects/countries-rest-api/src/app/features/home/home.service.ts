import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap, filter } from 'rxjs/operators';
import { Country } from '../../shared/country-list/country-list-factory';

@Injectable()
export class HomeService {

  private $inputChange: Subject<string> = new Subject<string>();
  public inputChange$: Observable<string> = this.$inputChange.asObservable();

  emitInputChange(filteredText: string) {
    this.$inputChange.next(filteredText);
  }
}
