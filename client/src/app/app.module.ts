import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import custom modules and services
import { NavigationModule } from './shared/navigation/navigation.module';
import { AuthenticationModule } from './authentication/authentication.module'
import { SessionManagementService } from './shared/services/session-management.service'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    AuthenticationModule
  ],
  providers: [SessionManagementService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
