import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'piero-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faMoon = faMoon;
  storedTheme: string | null = localStorage.getItem('theme-color') || 'theme-light';

  constructor() { }
  ngOnInit() { }

  toogleThemeMode() {
    if (this.storedTheme === 'theme-dark') {
      localStorage.setItem('theme-color', 'theme-light');
      this.storedTheme = localStorage.getItem('theme-color');
    } else {
      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = localStorage.getItem('theme-color');
    }
  }
}
