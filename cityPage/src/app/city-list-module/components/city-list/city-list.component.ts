import { Component, Input, OnInit, inject } from '@angular/core';
import { City } from 'src/app/models/cities';
import { DataManipulationService } from 'src/app/services/date-manipulation.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cities!:City[];
  constructor(private DateService:DataManipulationService) { 
    
  }
  ngOnInit(){
    this.cities=this.DateService.getCities();
    console.log(this.cities)
  }
}
