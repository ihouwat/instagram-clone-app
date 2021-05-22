import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
import { UserManagementService } from "../../shared/services/user-management.service";

import { Message, User } from "../../model/types";
import { SessionManagementService } from 'src/app/shared/services/session-management.service';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements AfterViewChecked {

  currentUser = this.userService.getCurrentUser().username;
  
  // message list container
  @ViewChild('messageList') messageList!: ElementRef;

  // Boolean flag indicating whether user selected a chat. Default is false.
  get chatSelected():boolean {
    return this.msgService.chatSelectedStatus;
  }

  // Gets a chat's participant and list of messages from message service
  get chatInfo():Array<any> {
    return this.msgService.listOfMessages;
  }

  // Parses chat list and assigns background color to each chat bubble based on user
  checkIfAccountOwner(sender:string) {
    return {
      'account-owner-bubble': sender === this.currentUser,
      'other-person-bubble': sender !== this.currentUser,
    }
  }

  /*
    For now, checks if user is signed in to allow messaging
    Eventually need to implement authorization guard to allow messaging only when signed in
  */
  isSignedIn():boolean {
    return this.sessionService.getSignInStatus();
  }

  // On pressing enter in comment box, send the message
  getCommentValue(target:EventTarget | null) {
    let inputValue:string = (target as HTMLInputElement).value;
    console.log(inputValue);
    
    (target as HTMLInputElement).value = ""; // Reset comment input box
  }

  // Scrolls to bottom of a chat list, allowing user to see the latest messages first
  scrollToBottomOfMsgList(): void {
    this.messageList?.nativeElement 
      ? this.messageList.nativeElement.scrollTop = this.messageList?.nativeElement.scrollHeight
      : null;
  }
  
  constructor(
    private msgService:MessageService,
    private userService:UserManagementService,
    private sessionService:SessionManagementService) {
    
    // Observable pattern to determine if chat is selected
    this.chatSelected;

    // Observable pattern to determine if chat is selected
    this.chatInfo;

  }
  
  ngAfterViewChecked(): void {
    this.scrollToBottomOfMsgList()
  }

}
