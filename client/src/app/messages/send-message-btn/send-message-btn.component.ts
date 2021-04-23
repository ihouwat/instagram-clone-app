import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ChatHeaderState } from "../message.service";
import { MessageService } from "../message.service";
import { UserSearchService } from "../../shared/user-search/user-search.service";
import { ButtonSize, ButtonType } from 'carbon-components-angular';

@Component({
  selector: 'app-send-message-btn',
  templateUrl: './send-message-btn.component.html',
  styleUrls: ['./send-message-btn.component.scss']
})
export class SendMessageBtnComponent {

  // IBM button configs
  @Input('ibmButtonType') ibmButtonType!:ButtonType;
  @Input('size') size!:ButtonSize;
  @Input('iconOnlyFlag') iconOnlyFlag!:boolean;
  
  // View the button content through ngTemplateOutlet
  @ContentChild('buttonContent', { static: false }) buttonContent!:TemplateRef<any>;

  startChat(event:Event) {
    if (this.messagesService.chatHeaderStatus !== ChatHeaderState.DisplaySearch) {
      this.messagesService.startNewChat();
    }
    /* 
      prevents global click handler in ToggleResultsDisplayDirective 
      from closing the results overflow menu
    */
    event.stopPropagation(); 
  }

  constructor(
    private messagesService:MessageService) {}
}
