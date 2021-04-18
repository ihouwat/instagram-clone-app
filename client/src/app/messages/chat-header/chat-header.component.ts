import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { UserSearchService } from '../../shared/user-search/user-search.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
  providers: [UserSearchService]
})
export class ChatHeaderComponent implements AfterViewInit {

  @ViewChild("searchInput", {read: ElementRef})
  searchInput!:ElementRef;
  
  // Msg service observable determines whether to display the search input or a user
  get getChatHeaderDisp():string {
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

    // Observable pattern
    this.getChatHeaderDisp;
  }

  ngAfterViewInit(): void {}


}
