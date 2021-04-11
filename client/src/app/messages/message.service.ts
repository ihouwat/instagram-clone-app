import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { UserManagementService } from '../shared/services/user-management.service';

import { User, Chat } from '../model/types'

// mock
import { CHATLIST } from '../../mock/chatsDB';


// Enum determining whether ChatHeaderComponent displays input search or user
export enum CHATHEADER {
  DisplaySearch = "DisplaySearch",
  DisplayUser = "DisplayUser"
}


@Injectable({
  providedIn: 'root'
})

export class MessageService {

  currentUser:User = this.userService.getCurrentUser();

  // Mock DB implementation
  chatList:Array<Chat> = CHATLIST;

  // Variable that holds Enum value
  chatHeader!:CHATHEADER;

  // Observable to determine whether ChatHeaderComponent displays input search or user
  chatHeaderSubj: Subject<CHATHEADER> = new Subject<CHATHEADER>();
  
  // Emits a value so that ChatHeaderComponent displays input search
  startNewChat() {
    this.chatHeaderSubj.next(CHATHEADER.DisplaySearch);
  }

  // Emits a value so that ChatHeaderComponent displays input search
  displayUser() {
    this.chatHeaderSubj.next(CHATHEADER.DisplayUser);
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

  
  constructor(private userService:UserManagementService) { 

    // Subscribe to the observable 
    this.chatHeaderSubj.subscribe((value) =>
      {next: (this.chatHeader = value)}
    )

  }
}
