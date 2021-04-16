import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/types';
import { UserSearchService } from 'src/app/shared/navigation/user-search.service';

import { USERS } from '../../../mock/userDB'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
  providers: [UserSearchService]
})
export class ChatHeaderComponent implements OnInit {

  // user comes as input - try mock
  user:User = USERS[0];
  users:Array<User> = USERS;
  
  // Msg service observable determines whether to display the search input or a user
  get getChatHeaderDisp():string {
    return this.msgService.chatHeader;
  }

    // Display search results when typing query in search box
    valueChange(input:string) {
      console.log(input);
      this.usrSearchService.searchForUser(input);
    }
  
    clear() {
      this.usrSearchService.closeSearchResults()
    }
  

  constructor(
    private msgService:MessageService,
    private usrSearchService:UserSearchService) {
    // Observable pattern
    this.getChatHeaderDisp;
  }

  ngOnInit(): void {}


}
