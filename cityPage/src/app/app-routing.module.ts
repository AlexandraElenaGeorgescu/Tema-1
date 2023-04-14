import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ 
  path: 'my-route', loadChildren: () => import('./app-functionality-module/app-functionality-module.module').then(m => m.AppFunctionalityModule) },
  { 
    path: 'cities', 
    loadChildren: () => import('./components/city-list/city-list.component').then(m => m.CityListComponent)
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
