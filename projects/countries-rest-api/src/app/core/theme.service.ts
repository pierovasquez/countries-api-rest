import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private $theme: BehaviorSubject<string> = new BehaviorSubject<string>('theme-light');
  public theme$ = this.$theme.asObservable();

  constructor() {}

  setNewTheme(theme: string) {
    this.$theme.next(theme);
  }
}
