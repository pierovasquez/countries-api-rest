import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'piero-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faMoon = faMoon;
  storedTheme: string;
  constructor(
    private themeService: ThemeService
  ) { }
  ngOnInit() {
    this.themeService.theme$.subscribe(theme => this.storedTheme = theme);
  }

  toogleThemeMode() {
    if (this.storedTheme === 'theme-dark') {
      this.themeService.setNewTheme('theme-light');
    } else {
      this.themeService.setNewTheme('theme-dark');
    }
  }
}
