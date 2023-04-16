import { Component } from '@angular/core';
import { TitlePanelComponent } from './app-functionality-module/components/title-panel/title-panel.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cityPage';
  bigTitle = '';
  onVisit(event: Event): void {
    const cityName = (event.target as HTMLElement).textContent;
    this.bigTitle = cityName || '';
    console.log(cityName);
  }
  
}
