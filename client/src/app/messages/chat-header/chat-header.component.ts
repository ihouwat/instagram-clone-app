import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { UserSearchService } from '../../shared/user-search/user-search.service';
import { MessageService } from '../message.service';
import { ChatHeaderState } from "../message.service";

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  providers: [UserSearchService]
})
export class ChatHeaderComponent {

  @ViewChild("searchInput", {read: ElementRef})
  searchInput!:ElementRef;

  chatHeaderState!:ChatHeaderState;

  // Msg service observable determines whether to display the search input or a user
  get chatHeaderDisplay():ChatHeaderState {
    return this.msgService.chatHeader;
  }

  // Display search results when typing query in search box
  @HostListener('keyup', ['$event'])
  onKeyUp(event:KeyboardEvent) {
    this.usrSearchService.searchForUser(this.searchInput.nativeElement.value);
    if (event.key === "Escape") {
      this.clearSearchInput();
    }
  }

  clearSearchInput() {
    this.searchInput.nativeElement.value = '';
    this.usrSearchService.closeSearchResults();
  }
  

  constructor(
    private msgService:MessageService,
    private usrSearchService:UserSearchService) {

    // Observable pattern to determine which template to display
    this.chatHeaderDisplay;

    // Search results overflow menu appears as the component is constructed
    this.usrSearchService.openSearchResults();
  }

}
