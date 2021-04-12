import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom components and services
import { MessagesRoutingModule } from './messages-routing.module'
import { MessageService } from './message.service';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { MessagesHeaderComponent } from './messages-header/messages-header.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { DirectivesModule } from '../shared/directives/directives.module'
import { NgPipesModule } from 'ngx-pipes';
import { NavigationModule } from '../shared/navigation/navigation.module';

// carbon design components
import { ButtonModule, InputModule, TilesModule, ComboBoxModule } from 'carbon-components-angular';
import { EditModule } from '@carbon/icons-angular';


@NgModule({
  declarations: [
    MessagesPageComponent, 
    MessagesHeaderComponent, 
    ChatListComponent, 
    MessageDisplayComponent, 
    ChatHeaderComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    EditModule,
    InputModule,
    DirectivesModule,
    NgPipesModule,
    MessagesRoutingModule,
    TilesModule,
    ComboBoxModule,
    NavigationModule
  ],
  providers: [MessageService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MessagesModule { }
