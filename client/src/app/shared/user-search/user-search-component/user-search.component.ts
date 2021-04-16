import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/messages/message.service';
import { User } from 'src/app/model/types';
import { UserSearchService } from '../user-search.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
})
export class UserSearchComponent<T> implements AfterViewInit{

  /*
    Get a location string from parent component and 
    set the searchResultsLocation attribute to be that string
  */
  @Input("location") location!:string; 
  @Input("inputBoxTemplate")
  inputBoxTemplateRef!: TemplateRef<T>;

  @ViewChild("searchInput", {read: ElementRef}) searchInput!:ElementRef;

  @ViewChild("searchBoxResults") searchBoxResults!:ElementRef;
  @ViewChild("searchResultOption") searchResultOption!:ElementRef;
  

  get getSearchResultsDisplay():boolean {
    return this.usrSearchService.searchResultsDisp;
  }

  get getSearchResultsList():any {
    return this.usrSearchService.searchResultsList;
  }

  setRoute(searchResult:User){
    switch(this.location) {
      case "header":
        return this.route.navigate(['/user', searchResult.username]);
      case "messages":
        return this.route.navigate(['/messages', this.msgService.getIndividualChat(searchResult).id]) 
      default:
        return
    }

  }
  

  constructor(
    private renderer:Renderer2,
    private usrSearchService:UserSearchService,
    private msgService:MessageService,
    private route:Router) {

    this.getSearchResultsDisplay;

    this.getSearchResultsList;

    // Detects mouse click events
    // this.renderer.listen('window', 'click', (e:Event) => {
      // if the mouse click is inside OR outside list of search results, close the overflow list
      // if(!this.searchBoxResults?.nativeElement.contains(e.target)) {
      //   console.log("clicked outside");
      //   this.usrSearchService.closeSearchResults();
      // }
    //   if (this.searchResultOption?.nativeElement?.contains(e.target)) {
    //     console.log("clicked");
    //     this.usrSearchService.closeSearchResults();
    //   }
    //   if(this.searchBox?.nativeElement.contains(e.target) && this.usrSearchService.searchResultsListLength > 0) {
    //     console.log("clicked on search input")
    //     this.usrSearchService.openSearchResults();
    //   }



    // })

    
    // this.renderer.listen('window', 'click', (e:Event) => {
    //   // if the mouse click is on the search box and there is an existing list of search results, display list
    //   if(this.searchBox?.nativeElement.contains(e.target) && this.usrSearchService.searchResultsListLength > 0) {
    //     this.usrSearchService.openSearchResults();
    //   }
    // })
  }

  ngAfterViewInit(): void {}

}
