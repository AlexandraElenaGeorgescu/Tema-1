import { Component, EventEmitter, Output } from '@angular/core';
import { DataManipulationService } from 'src/app/services/date-manipulation.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery!: string;

  @Output() searchQueryEmitter = new EventEmitter<string>();

  constructor(private dateManipulationService: DataManipulationService) { }

  search() {
    const formattedQuery = this.dateManipulationService.formatSearchQuery(this.searchQuery);
    this.searchQueryEmitter.emit(formattedQuery);
  }
}
