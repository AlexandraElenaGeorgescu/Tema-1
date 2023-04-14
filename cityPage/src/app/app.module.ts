import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { SelectedCityComponent } from './components/selected-city/selected-city.component';
import { AppFunctionalityModule } from './app-functionality-module/app-functionality-module.module';

@NgModule({
  declarations: [
    AppComponent,
    CityCardComponent,
    SelectedCityComponent,
    CityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFunctionalityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
