import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import custom modules and services
import { NavigationModule } from './shared/navigation/navigation.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserFeedModule } from './user-feed/user-feed.module';
import { SessionManagementService } from './shared/services/session-management.service';
import { UserManagementService } from './shared/services/user-management.service';
import { PostManagementService } from './shared/services/post-management.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PostsModule } from './posts/posts.module';
import { NewsFeedModule } from './news-feed/news-feed.module';

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
    UserFeedModule,
    PostsModule,
    NewsFeedModule,
  ],
  providers: [
    SessionManagementService,
    UserManagementService,
    PostManagementService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
