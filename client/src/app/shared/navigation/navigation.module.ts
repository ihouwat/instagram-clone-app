import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

// import custom components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// import carbon design modules
import {SearchModule, ButtonModule} from 'carbon-components-angular';
import {HomeModule, SendAltModule, AddAltModule, 
    UserAvatarModule, LogoGithubModule, LogoTwitterModule, LogoLinkedinModule} from '@carbon/icons-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
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
    LogoLinkedinModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class NavigationModule { }
