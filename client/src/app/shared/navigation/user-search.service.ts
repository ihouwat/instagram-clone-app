import { Injectable } from '@angular/core';
import { UserManagementService } from '../services/user-management.service';
import { User } from '../../model/types';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  public searchResultsDisp:boolean = false; // Boolean for opening/closing search box
  public searchResultsList:Array<User> = []; // List of search results

  // Display search results when typing query in search box
  searchForUser(input:string) {
    
    // Only refresh input list when 
    if(input.length > 0) {
      this.searchResultsList = this.userService.searchForUsers(input);
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

  closeSearchResults():boolean {
    return this.searchResultsDisp = false;
  }

  openSearchResults():boolean {
    return this.searchResultsDisp = true;
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

  constructor(private userService:UserManagementService) {}
}
