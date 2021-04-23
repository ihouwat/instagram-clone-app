import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { UserManagementService } from '../shared/services/user-management.service';
import { User, Chat } from '../model/types'

// mock
import { CHATLIST } from '../../mock/chatsDB';
import { ActivatedRoute, Router, ParamMap, RoutesRecognized, NavigationEnd } from '@angular/router';


// Enum determining whether ChatHeaderComponent displays input search or user
export enum ChatHeaderState  {
  DisplaySearch = "DISPLAYSEARCH",
  DisplayUser = "DISPLAYUSER"
}


@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private routeData!:any;

  currentUser:User = this.userService.getCurrentUser();

  // Mock DB implementation
  chatList:Array<Chat> = CHATLIST;

  // Variable that holds Enum value
  chatHeader!:ChatHeaderState;

  // Observable to determine whether ChatHeaderComponent displays input search or user
  chatHeaderSubj: Subject<ChatHeaderState> = new Subject<ChatHeaderState>();

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

  openChat(chat:Chat) {
    // Fetch list of messages here
    this.markMessagesRead(chat);
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
  
  constructor(
    private userService:UserManagementService,
    public router: Router,
    public route:ActivatedRoute) { 

    // Subscribe to the observable 
    this.chatHeaderSubj.subscribe((value) =>
      {next: (this.chatHeader = value)}
    )

    // 
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
          console.log(val.state.root.firstChild?.params);
      }
    });
    
  }

}
