import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-panel',
  templateUrl: './title-panel.component.html',
  styleUrls: ['./title-panel.component.scss']
})
export class TitlePanelComponent {
  bigTitle = 'New Adventure';

  constructor(private router: Router){

  };

  
  discoverNow(): void {
    this.router.navigate(['/cities'])
  }

  onVisit(event: Event): void {
    const cityName = (event.target as HTMLElement).textContent;
    this.bigTitle = cityName|| '';
  }

}
