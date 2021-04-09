import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

// import custom components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersSearchBoxComponent } from './users-search-box/users-search-box.component';

// import carbon design modules
import {SearchModule, ButtonModule} from 'carbon-components-angular';
import {HomeModule, SendAltModule, AddAltModule, UserAvatarModule, 
  LogoGithubModule, LogoTwitterModule, LogoLinkedinModule} from '@carbon/icons-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UsersSearchBoxComponent
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
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UsersSearchBoxComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NavigationModule { }
