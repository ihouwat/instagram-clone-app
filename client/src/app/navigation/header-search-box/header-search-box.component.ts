import { Component, Input, OnInit } from '@angular/core';
import { UserSearchService } from '../../shared/user-search/user-search.service';

@Component({
  selector: 'app-header-search-box',
  templateUrl: './header-search-box.component.html',
  providers: [UserSearchService]
})
export class HeaderSearchBoxComponent implements OnInit {

  // Inherits login status from parent components
  @Input('signedIn') signedIn!:boolean;
  

  // Disable/Enable search box based on login status
  disableSearchBox():boolean {
    return this.signedIn === true ? false : true;
  }

  // Display search results when typing query in search box
  valueChange(input:string) {
    this.usrSearchService.searchForUser(input);
  }

  clear() {
    this.usrSearchService.closeSearchResults()
  }

  constructor(private usrSearchService:UserSearchService) {};

  ngOnInit(): void {}

}
