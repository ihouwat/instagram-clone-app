import { Injectable } from '@angular/core';
import { UserManagementService } from '../services/user-management.service';
import { User } from '../../model/types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  public searchResultsDisp!:boolean; // Boolean for opening/closing search box

  // Observable to determine whether ChatHeaderComponent displays input search or user
  searchResultsDisplaySubject: Subject<boolean> = new Subject<boolean>(); // Boolean for opening/closing search box

  public searchResultsList:Array<User> = []; // List of search results

  searchResultsListSubject: Subject<any> = new Subject<any>();

  // Display search results when typing query in search box
  searchForUser(input:string) {

    // Only refresh input list when 
    if(input.length > 0) {
      this.searchResultsListSubject.next(this.userService.searchForUsers(input))
    }
    
    // Start displaying results once user has typed at least three characters
    if(input.length >= 3) {
      this.openSearchResults();
    }

    // Hide search results for 'backspace' key event that clears query
    if(input.length === 0) {
      this.closeSearchResults();
    }
    
  }

  closeSearchResults() {
    this.searchResultsDisplaySubject.next(false);
  }

  openSearchResults() {
    this.searchResultsDisplaySubject.next(true);
  }

  get searchResultsListLength():number {
    return this.searchResultsList.length;
  }

  get searchResults():Array<User> {
    return this.searchResultsList;
  }

  get searchResultDispStatus():boolean {
    return this.searchResultsDisp;
  }

  constructor(private userService:UserManagementService) {
    
    // Subscribe to the observable 
    this.searchResultsDisplaySubject.subscribe((value) =>
      {next: (this.searchResultsDisp = value)}
    )

    this.searchResultsListSubject.subscribe((value) =>
      {next: (this.searchResultsList = value)}
    )
  }
}
