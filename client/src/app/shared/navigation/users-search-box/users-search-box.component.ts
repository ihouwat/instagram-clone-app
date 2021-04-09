import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { User } from 'src/app/model/types';
import { UserManagementService } from '../../services/user-management.service';

@Component({
  selector: 'app-users-search-box',
  templateUrl: './users-search-box.component.html',
})
export class UsersSearchBoxComponent implements OnInit {

  // Inherits from parent components whether user is signed in or not
  @Input('signedIn') signedIn!:boolean;

  @ViewChild('searchBox', {read: ElementRef}) searchBox!:ElementRef;
  @ViewChild('searchBoxResults') searchBoxResults!:ElementRef; // Drop down list when searching for users
  searchResultsDisp:boolean = false; // Boolean for opening/closing search box
  searchResultsList:Array<User> = [];

  // If not signed in, disable search box
  disableSearchBox():boolean {
    return this.signedIn === true ? false : true;
  }

  // Display search results when typing query in search box
  searchBoxValueChange(input:string) {
    this.searchResultsList = this.userService.searchForUsers(input);
    
    // Start displaying results once user has typed at least three characters
    if(input.length >= 3) {
      this.searchResultsDisp = true;
    }

    // Hide search results for 'backspace' key event that clears query
    if(input.length === 0) {
      this.clearSearchBox();
    }
    
  }

  // Hide search results and empty search results when closing query
  clearSearchBox() {
    this.searchResultsDisp = false;
    this.searchResultsList = [];
  }

  constructor(
    private userService:UserManagementService,
    private renderer:Renderer2) { 
      // Detects mouse click events
      this.renderer.listen('window', 'click', (e:Event) => {
         // if the mouse click is outside list of search results, close the overflow list
         if(!this.searchBoxResults?.nativeElement.contains(e.target)) {
          console.log(this.searchBoxResults);
          this.searchResultsDisp = false;
        }

        // if the mouse click is on the search box and there is an existing list of search results, display list
        if(this.searchBox?.nativeElement.contains(e.target) && this.searchResultsList.length > 0) {
          this.searchResultsDisp = true;
        }
    });
  }

  ngOnInit(): void {
  }

}
