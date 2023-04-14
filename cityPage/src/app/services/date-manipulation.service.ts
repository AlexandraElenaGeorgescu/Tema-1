import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor() {}

  formatSearchQuery(query: string): string {
    // Remove extra spaces
    const trimmedQuery = query.trim();

    // Convert to lowercase
    const lowerCaseQuery = trimmedQuery.toLowerCase();

    return lowerCaseQuery;
  }

}
