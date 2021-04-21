import { Component, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/messages/message.service';
import { User } from 'src/app/model/types';
import { UserSearchService } from '../user-search.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
})
export class UserSearchComponent<T> {

  /*
    Get a location string from parent component and 
    set the searchResultsLocation attribute to be that string
  */
  @Input("location") location!:string; 
  @Input("inputBoxTemplate")
  inputBoxTemplateRef!: TemplateRef<T>;

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
    private usrSearchService:UserSearchService,
    private msgService:MessageService,
    private route:Router) {}

}
