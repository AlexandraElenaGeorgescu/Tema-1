import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityListModuleRoutingModule } from './city-list-module-routing.module';
import { CityListModuleComponent } from './city-list-module.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { SelectedCityComponent } from './components/selected-city/selected-city.component';


@NgModule({
  declarations: [
    CityListModuleComponent,
    CityListComponent,
    CityCardComponent,
    SelectedCityComponent
  ],
  imports: [
    CommonModule,
    CityListModuleRoutingModule
  ]
})
export class CityListModuleModule { }
