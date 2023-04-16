import { Injectable } from '@angular/core';
import { City } from '../models/cities';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor() {}

  cities: City[]=[
    { name: 'New York City', image: '/assets/images/ny.jpg', description: 'The city that never sleeps' },
    { name: 'Paris', image: '/assets/images/paris.jpg', description: 'The city of love'},
    { name: 'Tokyo', image: '/assets/images/tokyo.jpg', description: 'The city of lights'},
    { name: 'Brasov', image: '/assets/images/bv.jpg', description: 'The city of many wonders' },
    { name: 'London', image: '/assets/images/lon.jpg', description: 'The city of rain'},
    { name: 'Verona', image: '/assets/images/ver.jpg', description: 'The city of Romeo and Juliette'}
  ];

  private bigTitleSubject = new BehaviorSubject<string>('New Adventure');
  bigTitle$ = this.bigTitleSubject.asObservable();

  setBigTitle(name: string) {
    this.bigTitleSubject.next(name);
  }

  getCities(){
    return this.cities
  };

}
