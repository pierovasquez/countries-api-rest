import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailComponent } from './country-detail.component';
import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { CountryDetailService } from './country-detail.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [CountryDetailComponent],
  imports: [
    CommonModule,
    CountryDetailRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    CountryDetailService
  ]
})
export class CountryDetailModule { }
