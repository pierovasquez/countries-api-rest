import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailComponent } from './country-detail.component';
import { CountryDetailRoutingModule } from './country-detail-routing.module';



@NgModule({
  declarations: [CountryDetailComponent],
  imports: [
    CommonModule,
    CountryDetailRoutingModule
  ]
})
export class CountryDetailModule { }
