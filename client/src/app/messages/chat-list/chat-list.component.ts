import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';
import { Chat } from '../../model/types';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  // The list of chats fetched from the message service
  chatList!:Array<Chat>;

  selectedChat!:Chat;

  setChatItemStyles(id:number) {
    return {
      'chat-item': true,
      'current-chat-selected': this.selectedChat?.id === id ? true : false
    }
  }

  // Determines chat list font style, depending on read vs. unread messages 
  checkForUnreadMsgs(chat:Chat) {
    return {
      'unread-message': chat.unreadMessages,
      'read-message': !chat.unreadMessages
    }
  }

  // Open a chat on clicking on a chat list item
  openChat(chat:Chat) {
    this.msgService.openChat(chat);
    this.selectedChat = chat; 
  }

  constructor(private msgService:MessageService) { }

  ngOnInit(): void {
    this.chatList = this.msgService.getChatList();
  }

}
