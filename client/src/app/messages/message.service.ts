import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Subject } from 'rxjs';

import { UserManagementService } from '../shared/services/user-management.service';
import { User, Chat } from '../model/types'

// mock
import { CHATLIST } from '../../mock/chatsDB';
import { MESSAGES } from "../../mock/messagesDB";


// Enum determining whether ChatHeaderComponent displays input search or user
export enum ChatHeaderState  {
  DisplaySearch = "DISPLAYSEARCH",
  DisplayUser = "DISPLAYUSER"
}


@Injectable({
  providedIn: 'root'
})

export class MessageService {

  currentUser:User = this.userService.getCurrentUser();

  // Mock DB implementation
  chatList:Array<Chat> = CHATLIST;

  // Variable that holds Enum value
  chatHeader!:ChatHeaderState;

  // Observable to determine whether ChatHeaderComponent displays input search or user
  chatHeaderSubj: Subject<ChatHeaderState> = new Subject<ChatHeaderState>();

  // Variable that holds boolean flag indicating whether chat has been selected
  chatIsSelected!: boolean;

  // Observable to determine whether user has selected a chat or not
  chatIsSelectedSubj: Subject<boolean> = new Subject<boolean>();

  // Observable when fetching chat messages
  chatMessagesSubj: Subject<any> = new Subject<any>();

  // List of chat messages
  chatMessages!: any;

  // Get the display status of the chat header component (see interface above)
  get chatHeaderStatus():ChatHeaderState {
    return this.chatHeader;
  }

  // Emits a value so that ChatHeaderComponent displays input search
  startNewChat() {
    this.chatHeaderSubj.next(ChatHeaderState.DisplaySearch);
  }

  // Emits a value so that ChatHeaderComponent displays input search
  displayUser() {
    this.chatHeaderSubj.next(ChatHeaderState.DisplayUser);
  }

  // Get a user's list of chats from the server
  getChatList():Array<Chat> {
    // For now, manually remove the current User from participants
    // This work should be done on the server side

    this.chatList.forEach((chat:Chat) => {
      chat.participants.forEach((p:any) => {
        if (p.username === this.currentUser.username) {
          delete p.username;
        }
      })
    })

    return this.chatList;
  }

  // Fetch a chat's messages when user selects a chat 
  openChat(chat:Chat) {

    // Mark the chat thread as read
    this.markMessagesRead(chat);

    // Tells the message display component that a chat was selected
    this.chatSelectedIsTrue();
    
    this.getMessagesByChatID();
  }

  // Currently a mock implementation
  getIndividualChat(user:User) {
    // Fetch the chat 
    let chat:Array<Chat> = [];
    this.chatList.filter(c => 
      c.participants.filter(p => {
        if(p.username === user.username.toLowerCase()) {
          chat.push(c);
        }})
    )
    // Start a new chat
    this.displayUser();

    return chat[0];
  }

  // Helper method to mark all messages in a chat as read
  markMessagesRead(chat:Chat) {
    chat.unreadMessages = false;
  }

  // Helper method to mark all messages in a chat as unread
  markMessagesUnread(chat:Chat) {
    chat.unreadMessages = true;
  }

  chatSelectedIsTrue() {
    this.chatIsSelectedSubj.next(true);
  }

  chatSelectedIsFalse() {
    this.chatIsSelectedSubj.next(false);
  }

  get chatSelectedStatus():boolean {
    return this.chatIsSelected;
  }

  /* 
    Get a list of messages, using observable pattern.
    Note this is a mock and we'll eventually fetch by chat ID
  */
  getMessagesByChatID(){
    this.chatMessagesSubj.next(MESSAGES);
  }

  get listOfMessages():any {
    return this.chatMessages;
  }
  
  constructor(
    private userService:UserManagementService,
    public router: Router,
    public route:ActivatedRoute) { 

    // Subscribe to the chatHeaderSubj observable 
    this.chatHeaderSubj.subscribe((value) =>
      {next: (this.chatHeader = value)}
    )

    // Subscribe to the chatIsSelectedSubj observable 
    this.chatIsSelectedSubj.subscribe((value) => 
      {next: (this.chatIsSelected = value)}
    )

    // Subscribe to the chatMessagesSubj observable
    this.chatMessagesSubj.subscribe((value) =>
      {next: (this.chatMessages = value)}
    )

    // Get the id of the chat
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
          // console.log(val.state.root.firstChild?.params);
      }
    });
    
  }

}
