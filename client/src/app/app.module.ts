import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import custom modules and services
import { NavigationModule } from './shared/navigation/navigation.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserFeedsModule } from './user-feeds/user-feeds.module';
import { SessionManagementService } from './shared/services/session-management.service';
import { UserManagementService } from './shared/services/user-management.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    AuthenticationModule,
    UserFeedsModule
  ],
  providers: [
    SessionManagementService,
    UserManagementService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
