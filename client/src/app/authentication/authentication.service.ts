import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// mock db
import { UserManagementService } from '../shared/services/user-management.service';

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
    console.log(this.signUpInfo);

    // Route to user page
    // TODO ? do validation, JWT, etc all here, pass on info to UserMgmtService and session info to SessionMgmtService
    this.userMgmtService.getUserRoute(this.loginInfo.username)
  }

  // Validate and login in user.
  // FormGroup comes from Login Component
  validateAndLogin(form:FormGroup){
    this.loginInfo = form;
    // Route to user page if login validated
    // TODO ? do validation, JWT, etc all here, pass on info to UserMgmtService and session info to SessionMgmtService
    this.userMgmtService.getUserRoute(this.loginInfo.email);
  }

  constructor(private userMgmtService: UserManagementService,
    private router:Router) { }
  
}
