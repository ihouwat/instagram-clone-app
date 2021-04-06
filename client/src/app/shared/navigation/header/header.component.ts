import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SessionManagementService } from '../../services/session-management.service';
import { UserManagementService } from '../../services/user-management.service';
import { User } from '../../../model/types';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @ViewChild('overflowMenuBtn') overflowMenuBtn!:ElementRef;
  @ViewChild('overflowMenu') overflowMenu!:ElementRef;
  isMenuOpen:boolean = false;

  accountOwner!:User;
  signedIn:boolean = this.sessionService.getSignInStatus();

  constructor(
    private sessionService:SessionManagementService,
    private userService:UserManagementService,
    private renderer:Renderer2) {
      // Detects mouse click events
      this.renderer.listen('window', 'click', (e:Event) => {
        // if the mouse click happens outside the button or menu, close the menu
        if(!this.overflowMenu?.nativeElement.contains(e.target)
          && !this.overflowMenuBtn?.nativeElement.contains(e.target)) {
          this.isMenuOpen = false;
        }
      });
    }

  ngOnInit():void {
    // Fetch sign in status on log in
    if (this.signedIn) this.accountOwner = this.userService.getAccountOwner();
  }

  // If not signed in, disable search box
  disableSearchBox():boolean {
    return this.signedIn === true ? false : true;
  }

  // Toggles overflow menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  signOut() {
    this.sessionService.signOutSession();
  }

}
