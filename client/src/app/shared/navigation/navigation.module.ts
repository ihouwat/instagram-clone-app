import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

// import custom components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersSearchBoxComponent } from './users-search-box/users-search-box.component';

// import carbon design modules
import {SearchModule, ButtonModule, DialogModule} from 'carbon-components-angular';
import {HomeModule, SendAltModule, AddAltModule, UserAvatarModule, 
  LogoGithubModule, LogoTwitterModule, LogoLinkedinModule} from '@carbon/icons-angular';
import { UsersSearchResultsComponent } from './users-search-results/users-search-results.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UsersSearchBoxComponent,
    UsersSearchResultsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SearchModule,
    ButtonModule,
    HomeModule, 
    SendAltModule, 
    AddAltModule,
    UserAvatarModule,
    LogoGithubModule,
    LogoTwitterModule,
    LogoLinkedinModule,
    DialogModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UsersSearchBoxComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NavigationModule { }
