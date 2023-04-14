import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title-panel',
  templateUrl: './title-panel.component.html',
  styleUrls: ['./title-panel.component.scss']
})
export class TitlePanelComponent {
  @Output() discoverNowClicked = new EventEmitter<void>();

  discoverNow(): void {
    this.discoverNowClicked.emit();
  }
}
