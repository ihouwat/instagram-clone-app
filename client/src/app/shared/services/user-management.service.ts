import { Injectable } from '@angular/core';

import { User } from '../../models/types';
import { Router } from "@angular/router";
import { SessionManagementService } from './session-management.service';

// Mock users
import { USERS } from '../../../mock/userDB';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  // * This service is to manage user information and updates to profile information

  user!:User;

  // For now, manually get user email from login page and redirect to user page
  // TODO implement proper user authorization, probably move to authorization service
  navigateToUserRoute(email: string):void {
    if (this.sessionService.isSignedIn) {
      const userObj = this.findUserByEmail(email);
      if (userObj) this.router.navigate([`/user/${userObj.username}`]);
      else this.router.navigate(['/404']);
    }
    else this.router.navigate (['./login']);
  }

  getUser():User {
    return this.user;
  }

  findUserByEmail(userEmail:string) {
    this.user = USERS.filter((u:User) => u.email === userEmail)[0];
    this.user !== undefined ? this.user : undefined;
    return this.user;
  }

  findUserByUserName(username:string) {
    this.user = USERS.filter((u:User) => u.username === username);
    return this.user;
  }

  constructor(
    private router:Router,
    private sessionService:SessionManagementService) { }
}
