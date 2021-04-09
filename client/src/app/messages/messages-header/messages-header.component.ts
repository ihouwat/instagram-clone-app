import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages-header',
  templateUrl: './messages-header.component.html',
  styleUrls: ['./messages-header.component.scss']
})
export class MessagesHeaderComponent implements OnInit {

  startChat() {
    this.messagesService.startNewChat();
  }

  constructor(private messagesService:MessageService) { }

  ngOnInit(): void {
  }

}
