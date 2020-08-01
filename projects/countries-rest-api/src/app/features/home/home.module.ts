import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { HomeService } from './home.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [HomeComponent, FilterInputComponent, FilterSelectComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }
