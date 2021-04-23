import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.scss']
})
export class MessageDisplayComponent implements OnInit {

  messageSelected!:boolean;

  constructor() { }

  ngOnInit(): void {
    this.messageSelected = false;
  }

}
