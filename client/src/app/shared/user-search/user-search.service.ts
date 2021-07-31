import { Injectable } from '@angular/core';
import { UserManagementService } from '../services/user-management.service';
import { User } from '../../model/types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  public searchResultsDisplay!:boolean; // Flag for opening/closing search box

  // Subject to determine whether ChatHeaderComponent displays input search or user
  searchResultsDisplaySubject: Subject<boolean> = new Subject<boolean>(); // Boolean for opening/closing search box
  
  public searchResultsList:Array<User> = []; // List of search results

  searchResultsListSubject: Subject<any> = new Subject<any>();

  // Display search results when typing query in search box
  searchForUser(input:string) {

    // Only refresh input list when 
    if(input.length > 0) {
      this.searchResultsListSubject.next(this.userService.getListOfUsersFromSearch(input))
      this.openSearchResults();
    }
    
  }

  // Close results overflow menu
  closeSearchResults() {
    this.searchResultsDisplaySubject.next(false);
  }

  // Open results overflow menu
  openSearchResults() {
    this.searchResultsDisplaySubject.next(true);
  }

  // Get the length of the search list results array
  get searchResultsListLength():number {
    return this.searchResultsList.length;
  }

  // Get the array of search results
  get searchResults():Array<User> {
    return this.searchResultsList;
  }

  // Get the open/close status of the search results overflow menu
  get searchResultDispStatus():boolean {
    return this.searchResultsDisplay;
  }

  constructor(private userService:UserManagementService) {
    
    // Subscribe to the observable controlling the results display flag
    this.searchResultsDisplaySubject.subscribe((value) =>
      {next: (this.searchResultsDisplay = value)}
    )

    // Subscribe to the observable controlling the results array
    this.searchResultsListSubject.subscribe((value) =>
      {next: (this.searchResultsList = value)}
    )
  }
}
