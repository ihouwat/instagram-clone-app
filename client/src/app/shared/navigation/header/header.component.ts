import { Component, OnInit } from '@angular/core';
import { SessionManagementService } from '../../services/session-management.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  signedIn!:boolean;

  constructor(private sessionManagement : SessionManagementService) {}

  ngOnInit(): void {
    // Fetch sign in status on log in
    this.signedIn = this.sessionManagement.isSignedIn;
  }

  // If not signed in, disable search box
  disableSearchBox():boolean {
    return this.signedIn === true ? false : true;
  }

  
}
