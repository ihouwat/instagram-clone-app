import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountDetailsComponent } from './sign-up/account-details/account-details.component';
import { UploadImageComponent } from './sign-up/upload-image/upload-image.component';
import { PersonalDetailsComponent } from './sign-up/personal-details/personal-details.component';
import { AuthenticationService } from './authentication.service'

// import carbon design modules
import { InputModule, ButtonModule, ProgressIndicatorModule, PlaceholderModule, FileUploaderModule } from 'carbon-components-angular';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AccountDetailsComponent,
    UploadImageComponent,
    PersonalDetailsComponent,
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    ProgressIndicatorModule,
    PlaceholderModule,
    FileUploaderModule
  ],
  providers:[AuthenticationService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthenticationModule { }
