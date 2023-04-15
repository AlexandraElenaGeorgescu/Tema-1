import { Injectable } from '@angular/core';
import { City } from '../models/cities';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor() {}

  cities: City[]=[
    { name: 'New York City', image: 'new-york-city.jpg', description: 'The city that never sleeps' },
    { name: 'Paris', image: 'paris.jpg', description: 'The city of love'},
    { name: 'Tokyo', image: 'tokyo.jpg', description: 'The city of lights'}
  ];

  getCities(){
    return this.cities
  };

  formatSearchQuery(query: string): string {
    // Remove extra spaces
    const trimmedQuery = query.trim();

    // Convert to lowercase
    const lowerCaseQuery = trimmedQuery.toLowerCase();

    return lowerCaseQuery;
  }

}
