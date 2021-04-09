import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  startNewChat() {
    console.log("Clicked Start New Chat Btn!");
  }
  
  constructor() { }
}
