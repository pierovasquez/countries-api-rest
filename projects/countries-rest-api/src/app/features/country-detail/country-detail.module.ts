import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailComponent } from './country-detail.component';
import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { CountryDetailService } from './country-detail.service';



@NgModule({
  declarations: [CountryDetailComponent],
  imports: [
    CommonModule,
    CountryDetailRoutingModule
  ],
  providers: [
    CountryDetailService
  ]
})
export class CountryDetailModule { }
