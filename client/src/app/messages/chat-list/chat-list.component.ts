import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';
import { Chat, User } from '../../model/types';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  chatList!:Array<Chat>;

  constructor(private msgService:MessageService) { }

  ngOnInit(): void {
    this.chatList = this.msgService.getChatList();
  }

}
