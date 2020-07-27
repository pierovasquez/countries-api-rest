import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CountryListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CountryListComponent
  ]
})
export class SharedModule { }
