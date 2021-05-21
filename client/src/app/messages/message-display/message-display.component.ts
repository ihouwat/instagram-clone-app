import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { UserManagementService } from "../../shared/services/user-management.service";

import { Message, User } from "../../model/types";

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {

  currentUser = this.userService.getCurrentUser().username;

  // Boolean flag indicating whether user selected a chat. Default is false.
  get chatSelected():boolean {
    return this.msgService.chatSelectedStatus;
  }

  get chatMessages():Array<Message> {
    return this.msgService.listOfMessages;
  }

  messages!:Array<Message>;
  
  checkIfAccountOwner(sender:string) {
    return {
      'account-owner-bubble': sender === this.currentUser,
      'other-person-bubble': sender !== this.currentUser,
    }
  }
  
  constructor(
    private msgService:MessageService,
    private userService:UserManagementService) {
    
    // Observable pattern to determine if chat is selected
    this.chatSelected;

    // Observable pattern to determine if chat is selected
    this.chatMessages;
  }
  
  ngOnInit(): void {}

}
