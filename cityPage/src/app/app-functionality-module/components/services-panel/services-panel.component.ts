import { Component } from '@angular/core';

@Component({
  selector: 'app-services-panel',
  templateUrl: './services-panel.component.html',
  styleUrls: ['./services-panel.component.scss']
})
export class ServicesPanelComponent {
  services = [
    { title: 'Travel', description: 'Discover new places with us' },
    { title: 'Travel Arrangements', description: 'Leave the planning to us' },
    { title: 'Our Professional Guide', description: 'Experience the best of every location' },
    { title: 'Activities', description: 'Create unforgettable memories' }
  ];
}
