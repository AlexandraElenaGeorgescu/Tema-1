import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-panel',
  templateUrl: './title-panel.component.html',
  styleUrls: ['./title-panel.component.scss']
})
export class TitlePanelComponent {
  bigTitle = 'New Adventure';

  constructor(private router: Router){};

  @Input() onVisit: any;
  
  discoverNow(): void {
    this.router.navigate(['/cities'])
  }

  visit(city: string): void {
    this.onVisit(city);
  }

}
