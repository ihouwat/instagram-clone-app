import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// import custom components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderSearchBoxComponent } from './header-search-box/header-search-box.component';
import { UserSearchModule } from '../shared/user-search/user-search.module'

// import carbon design modules
import {SearchModule, ButtonModule} from 'carbon-components-angular';
import {HomeModule, SendAltModule, AddAltModule, UserAvatarModule, 
  LogoGithubModule, LogoTwitterModule, LogoLinkedinModule} from '@carbon/icons-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderSearchBoxComponent,
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
    UserSearchModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderSearchBoxComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NavigationModule { }
