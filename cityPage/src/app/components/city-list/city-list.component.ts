import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent {
  @Input()
  cities!: [
    { name: 'New York City', image: 'new-york-city.jpg', description: 'The city that never sleeps' },
    { name: 'Paris', image: 'paris.jpg', description: 'The city of love'},
    { name: 'Tokyo', image: 'tokyo.jpg', description: 'The city of lights'}
  ];

  constructor() { }

}
