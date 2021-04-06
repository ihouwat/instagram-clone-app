import { Injectable } from '@angular/core';

import { User } from '../../model/types';
import { Router } from "@angular/router";
import { SessionManagementService } from './session-management.service';

// Mock users
import { USERS } from '../../../mock/userDB';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  // * This service is to manage user information and updates to profile information

  // For now, manually get user email from login page and redirect to user page
  navigateToUserRoute(username: string):void {
    const user = this.findUserByUserName(username);
    if (user) this.router.navigate([`/user/${user.username}`]);
    else this.router.navigate(['/404']);
  }

  getUser(username:string):User {
    const user = this.findUserByUserName(username);
    return user;
  }

  getAccountOwner():User {
    return this.sessionService.getSessionInfo();
  }

  findUserByUserName(username:string) {
    let userObj = USERS.filter((u:User) => u.username === username);
    return userObj[0];
  }

  setUserAccountDetails(fg:FormGroup) {
    console.log(fg.value);
  }

  setUserPassword(fg:FormGroup) {
    console.log(fg.value);
  }

  constructor(
    private router:Router,
    private sessionService:SessionManagementService) { }
}
