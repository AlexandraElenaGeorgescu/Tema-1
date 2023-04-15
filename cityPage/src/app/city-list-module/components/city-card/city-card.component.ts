import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent {
  @Input() city: any;
  @Output() visitNow = new EventEmitter<string>();
  onVisit() {
    this.visitNow.emit(this.city.name);
  }  
}
