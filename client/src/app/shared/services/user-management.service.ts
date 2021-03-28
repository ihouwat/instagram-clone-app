import { Injectable } from '@angular/core';

import { User } from '../../models/types';
import { USERS } from '../../../mock/userDB';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  // * This service is to manage user information and updates to profile information

  user!:User;

  // For now, manually get user email from login page and redirect to user page
  // TODO implement proper user authorization, probably move to authorization service
  getUserRoute(user: string):void {

    const userObj = USERS.filter((u:User) => u.email === user);

    if (userObj) this.router.navigate([`./${userObj[0].username}`]);
    
    else this.router.navigate(['./404']);

  }

  constructor(private router:Router) { }
}
