import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

// mock db
import { USERS } from '../mock/userDB';  

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  signUpInfo!:any;
  loginInfo!:any;

  // Receive FormGroup from from Sign Up Component
  signUpUser(form:FormGroup) {
    this.signUpInfo = form;
    console.log(this.signUpInfo);
    // Route to user page
    this.router.navigate(['/']);
  }

  // Validate and login in user.
  // FormGroup comes from Login Component
  validateAndLogin(form:FormGroup){
    this.loginInfo = form;
    console.log(this.loginInfo);

    // Route to user page if login validated
    if(this.loginInfo.email === USERS[0].email 
        && this.loginInfo.password === USERS[0].password){
          this.router.navigate(['/']);
      }
  }

  constructor(private router: Router) { }
  
}
