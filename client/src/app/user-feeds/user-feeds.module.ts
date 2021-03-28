import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// import custom components and modules
import { UserFeedsRoutingModule } from './user-feeds-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { NavigationModule } from '../shared/navigation/navigation.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PostsModule } from '../posts/posts.module';

// import carbon components and modules
import { ButtonModule, LinkModule } from 'carbon-components-angular';

@NgModule({
  declarations: [
    SettingsComponent,
    UserProfileComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    UserFeedsRoutingModule,
    NavigationModule,
    ButtonModule,
    LinkModule,
    PostsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserFeedsModule { }
