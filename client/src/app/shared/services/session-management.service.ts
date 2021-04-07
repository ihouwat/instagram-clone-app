import { Injectable } from '@angular/core';

import { User } from '../../model/types';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  // * This service is to manage sessions, Web Storage API, Redis connection, ??JWT??

  // Stay signed in for dev mode   
  private isSignedIn:boolean = true;
    
  getSignInStatus():boolean {
    return this.isSignedIn;
  }

  signInSession(user:User) {
    this.isSignedIn = true;
    sessionStorage.setItem('accountOwner', JSON.stringify(user));
  }

  signOutSession() {
    this.isSignedIn = false;
    sessionStorage.clear();
  }

  getSessionInfo():User {
    const accountOwner = JSON.parse(sessionStorage.getItem('accountOwner') || '{}');
    return accountOwner;
  }

  constructor() { }
}
