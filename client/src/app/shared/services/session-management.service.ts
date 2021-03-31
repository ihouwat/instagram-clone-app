import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  // * This service is to manage sessions, Redis connection, ??JWT??

  isSignedIn!:boolean;
  
  signInSession() {
    this.isSignedIn = true;
  }

  signOutSession() {
    this.isSignedIn = false;
  }

  constructor() { }
}
