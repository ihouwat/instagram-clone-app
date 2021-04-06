import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '../model/types';
// mock db
import { USERS } from '../../mock/userDB';

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
  signUpUser(form:FormGroup):void {
    this.signUpInfo = form;

    /* To implement: server returns user object to pass along to sessionService
      for now, just select user from mock DB
    */
    const user = USERS[0];
    this.signIn(user);
  }

  // Validate user on backend. FormGroup comes from Login Component
  validateLoginForm(form:FormGroup):void {
    this.loginInfo = form;

    /* To implement: server returns user object to pass along to sessionService
      for now, just filter user from mock DB
    */
    const user = USERS.filter((u:User) => u.email === this.loginInfo.email)[0];
    this.signIn(user);
  }

  signIn(user:User):void {
    // Sign in through session management service
    this.sessionService.signInSession(user);
    // Route to user page
    this.userService.navigateToUserRoute(user.username);
  }

  constructor(
    private userService:UserManagementService,
    private sessionService:SessionManagementService) { }
  
}
