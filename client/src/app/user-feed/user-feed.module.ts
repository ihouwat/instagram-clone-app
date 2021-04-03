import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

// import custom components and modules
import { UserFeedRoutingModule } from './user-feed-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { NavigationModule } from '../shared/navigation/navigation.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PostsModule } from '../posts/posts.module';

// import carbon components and modules
import { ButtonModule, LinkModule, TabsModule, InputModule, ModalModule, ModalService } from 'carbon-components-angular';
import { FormModalComponent } from './settings/form-modal/form-modal.component';

@NgModule({
  declarations: [
    SettingsComponent,
    UserProfileComponent,
    UserInfoComponent,
    FormModalComponent,
  ],
  imports: [
    CommonModule,
    UserFeedRoutingModule,
    NavigationModule,
    ButtonModule,
    LinkModule,
    PostsModule,
    TabsModule,
    InputModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  providers: [ModalService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserFeedModule { }
