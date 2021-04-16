import { Component, ContentChild, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/types';
import { UserSearchService } from '../user-search.service';

@Component({
  selector: 'app-user-search-results-2',
  templateUrl: './user-search-results.component-2.html',
})
export class UserSearchResultsComponent2<T> implements OnInit {

  
  /*
    Get a location string from parent component and 
    set the searchResultsLocation attribute to be that string
  */
  @Input("location") location!:string; 
  @Input("inputBoxTemplate")
  inputBoxTemplateRef!: TemplateRef<any>;

  @ViewChild('searchBox', {read: ElementRef}) searchBox!:ElementRef; // Searchbox element
  @ViewChild("searchBoxResults") searchBoxResults!:ElementRef;
  @ViewChild("searchResultOption") searchResultOption!:ElementRef;
  

  get getSearchResultsDisplay():boolean {
    return this.usrSearchService.searchResultsDisp;
  }

  get getSearchResultsList():any {
    return this.usrSearchService.searchResultsList;
  }

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

    this.getSearchResultsDisplay;

    this.getSearchResultsList;

    // Detects mouse click events
    this.renderer.listen('window', 'click', (e:Event) => {
      // if the mouse click is inside OR outside list of search results, close the overflow list
      // if(!this.searchBoxResults?.nativeElement.contains(e.target)) {
      //   console.log("clicked outside");
      //   this.usrSearchService.closeSearchResults();
      // }
      if (this.searchResultOption?.nativeElement?.contains(e.target)) {
        console.log("clicked");
        this.usrSearchService.closeSearchResults();
      }
      if(this.searchBox?.nativeElement.contains(e.target) && this.usrSearchService.searchResultsListLength > 0) {
        console.log("clicked on search input")
        this.usrSearchService.openSearchResults();
      }
    })
  }

  ngOnInit(): void {console.log(this.searchBox);}

}
