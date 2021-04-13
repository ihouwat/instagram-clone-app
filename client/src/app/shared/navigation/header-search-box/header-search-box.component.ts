import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserSearchService } from '../user-search.service';

@Component({
  selector: 'app-header-search-box',
  templateUrl: './header-search-box.component.html',
})
export class HeaderSearchBoxComponent implements OnInit {

  // Inherits login status from parent components
  @Input('signedIn') signedIn!:boolean;
  @ViewChild('searchBox', {read: ElementRef}) searchBox!:ElementRef; // Searchbox element
  

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

  constructor(
    private renderer:Renderer2,
    private usrSearchService:UserSearchService) { 
      this.renderer.listen('window', 'click', (e:Event) => {
        // if the mouse click is on the search box and there is an existing list of search results, display list
        if(this.searchBox?.nativeElement.contains(e.target) && this.usrSearchService.searchResultsListLength > 0) {
          this.usrSearchService.openSearchResults();
        }
      })
    };

  ngOnInit(): void {}

}
