import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom components and services
import { MessageService } from './message.service';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { MessagesHeaderComponent } from './messages-header/messages-header.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { MessageDisplayComponent } from './message-display/message-display.component';

import { NavigationModule } from '../shared/navigation/navigation.module';

// carbon design components
import { ButtonModule } from 'carbon-components-angular';
import { EditModule } from '@carbon/icons-angular';

@NgModule({
  declarations: [
    MessagesPageComponent, 
    MessagesHeaderComponent, 
    ChatListComponent, 
    MessageDisplayComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    ButtonModule,
    EditModule
  ],
  providers: [MessageService]
})
export class MessagesModule { }
