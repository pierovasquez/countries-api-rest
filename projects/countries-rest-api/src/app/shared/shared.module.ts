import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryItemComponent } from './country-item/country-item.component';



@NgModule({
  declarations: [
    CountryListComponent,
    CountryItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CountryListComponent,
    
  ]
})
export class SharedModule { }
