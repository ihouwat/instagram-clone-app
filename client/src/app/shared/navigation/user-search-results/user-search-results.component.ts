import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/types';
import { UserSearchService } from '../user-search.service';

@Component({
  selector: 'app-user-search-results',
  templateUrl: './user-search-results.component.html',
})
export class UserSearchResultsComponent implements OnInit {
  
  /*
    Get a location string from parent component and 
    set the searchResultsLocation attribute to be that string
  */
  @Input("location") location!:string; 
  @ViewChild("searchBoxResults") searchBoxResults!:ElementRef;
  @ViewChild("searchResultOption") searchResultOption!:ElementRef;
  
  searchResultsList:Array<User> = this.usrSearchService.searchResults;
  searchResultsDisp:boolean = true;

  setRoute(result:User){
    if(this.location === "header") {
      return this.route.navigate(['/user', result.username])
    }
    else return
  }

  constructor(
    private renderer:Renderer2,
    private usrSearchService:UserSearchService,
    private route:Router) {
    // Detects mouse click events
    this.renderer.listen('window', 'click', (e:Event) => {
      // if the mouse click is inside OR outside list of search results, close the overflow list
      if(!this.searchBoxResults?.nativeElement.contains(e.target)
        || this.searchResultOption?.nativeElement.contains(e.target)) {
          // this.searchResultsDisp = this.usrSearchService.closeSearchResults();
      }
    })
  }

  ngOnInit(): void {}

}
