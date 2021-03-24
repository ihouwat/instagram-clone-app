import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication/authentication.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  signedIn!:boolean;

  constructor(private authService : AuthenticationService) {}

  ngOnInit(): void {
    // Fetch sign in status on log in
    this.signedIn = this.authService.isSignedIn;
  }

  // If not signed in, disable search box
  disableSearchBox():boolean {
    return this.signedIn === true ? false : true;
  }

  
}
