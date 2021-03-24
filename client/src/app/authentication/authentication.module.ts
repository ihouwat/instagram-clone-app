import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

// import carbon design modules
import { InputModule, ButtonModule } from '../../../node_modules/carbon-components-angular';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    AuthenticationRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthenticationModule { }
