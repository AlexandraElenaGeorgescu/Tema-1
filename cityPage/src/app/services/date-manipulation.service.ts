import { Injectable } from '@angular/core';
import { City } from '../models/cities';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor() {}

  cities: City[]=[
    { name: 'New York City', image: '/assets/images/ny.jpg', description: 'The city that never sleeps' },
    { name: 'Paris', image: '/assets/images/paris.jpg', description: 'The city of love'},
    { name: 'Tokyo', image: '/assets/images/tokyo.jpg', description: 'The city of lights'}
  ];

  getCities(){
    return this.cities
  };

}
