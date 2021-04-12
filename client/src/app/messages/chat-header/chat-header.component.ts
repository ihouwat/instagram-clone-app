import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/types';

import { USERS } from '../../../mock/userDB'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {

  // user comes as input - try mock
  user:User = USERS[0];
  users:Array<User> = USERS;
  searchResultsDisp = true;
  
  // Msg service observable determines whether to display the search input or a user
  get getChatHeaderDisp():string {
    return this.msgService.chatHeader;
  }

  constructor(private msgService:MessageService) {
    // Observable pattern
    this.getChatHeaderDisp;
  }

  ngOnInit(): void {}
}
