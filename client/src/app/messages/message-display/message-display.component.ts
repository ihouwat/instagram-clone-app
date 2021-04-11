import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {

  messageSelected!:boolean;

  startChat() {
    this.msgService.startNewChat();
  }

  constructor(private msgService:MessageService) { }

  ngOnInit(): void {
    this.messageSelected = false;
  }

}
