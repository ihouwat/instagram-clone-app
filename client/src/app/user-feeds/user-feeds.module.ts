import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// import custom components and modules
import { UserFeedsRoutingModule } from './user-feeds-routing.module';
import { UserFeedsComponent } from './user-feeds.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';
import { NavigationModule } from '../shared/navigation/navigation.module';

@NgModule({
  declarations: [
    UserFeedsComponent,
    UserComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    UserFeedsRoutingModule,
    NavigationModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserFeedsModule { }
