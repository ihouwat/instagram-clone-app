import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

// import custom components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// import carbon design system modules
import {SearchModule, ButtonModule} from 'carbon-components-angular';
import {HomeModule, SendAltModule, AddAltModule, UserAvatarModule} from '@carbon/icons-angular';


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
    UserAvatarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class NavigationModule { }
