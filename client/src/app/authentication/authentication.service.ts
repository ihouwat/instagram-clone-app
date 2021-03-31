import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

// mock db
import { UserManagementService } from '../shared/services/user-management.service';
import { SessionManagementService } from '../shared/services/session-management.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // * Purpose of this service is to authenticate login and signup of users.

  signUpInfo!:any;
  loginInfo!:any;

  // Receive FormGroup from from Sign Up Component
  signUpUser(form:FormGroup) {
    this.signUpInfo = form;

    // Sign in
    this.sessionService.signInSession();
    // Route to user page
    // TODO ? do validation, JWT, etc all here, pass on info to UserMgmtService and session info to SessionMgmtService
    this.userService.navigateToUserRoute(this.loginInfo.username)
  }

  // Validate and login in user.
  // FormGroup comes from Login Component
  validateAndLogin(form:FormGroup){
    this.loginInfo = form;

    this.sessionService.signInSession();
    // Route to user page if login validated
    // TODO ? do validation, JWT, etc all here, pass on info to UserMgmtService and session info to SessionMgmtService
    this.userService.navigateToUserRoute(this.loginInfo.email);
  }

  constructor(
    private userService:UserManagementService,
    private sessionService:SessionManagementService) { }
  
}
