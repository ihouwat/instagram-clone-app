import { Injectable } from '@angular/core';

import { User } from '../../models/types';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  // * This service is to manage sessions, Redis connection, ??JWT??

  // Stay signed in for dev mode   
  isSignedIn:boolean = true;
    
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
