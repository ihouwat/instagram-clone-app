import { Injectable } from '@angular/core';

import { User } from '../../model/types';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  // * This service is to manage sessions, Web Storage API, Redis connection, ??JWT??

  /* 
    Flag for determining session status.
    Stay signed in for dev mode   
   */
  private isSignedIn:boolean = true;
    
  getSignInStatus():boolean {
    return this.isSignedIn;
  }

  // Create session when user signs in
  login(user:User) {
    this.isSignedIn = true;
    sessionStorage.setItem('currentAccount', JSON.stringify(user));
  }

  // Destroy session on log out
  logout() {
    this.isSignedIn = false;
    sessionStorage.clear();
  }

  getCurrentAccount():User {
    const account = JSON.parse(sessionStorage.getItem('currentAccount') || '{}');
    return account;
  }

  constructor() { }
}
