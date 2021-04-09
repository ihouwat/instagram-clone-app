import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

// import custom components and modules
import { UserFeedRoutingModule } from './user-feed-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PostsModule } from '../posts/posts.module';

// import carbon components and modules
import { ButtonModule, LinkModule, TabsModule, InputModule, ModalModule, ModalService } from 'carbon-components-angular';
import { FormModalComponent } from './settings/form-modal/form-modal.component';
import { AccountSettingsForm } from './settings/account-settings-form/account-settings-form.component';
import { ChangePasswordForm } from './settings/change-password-form/change-password-form.component';

@NgModule({
  declarations: [
    SettingsComponent,
    UserProfileComponent,
    UserInfoComponent,
    FormModalComponent,
    AccountSettingsForm,
    ChangePasswordForm,
  ],
  imports: [
    CommonModule,
    UserFeedRoutingModule,
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
