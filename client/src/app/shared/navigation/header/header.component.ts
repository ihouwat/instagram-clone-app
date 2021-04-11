import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SessionManagementService } from '../../services/session-management.service';
import { UserManagementService } from '../../services/user-management.service';
import { User } from '../../../model/types';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @ViewChild('overflowMenuBtn') overflowMenuBtn!:ElementRef; // Profile menu button
  @ViewChild('overflowMenu') overflowMenu!:ElementRef; // Profile menu
  isMenuOpen:boolean = false; // Boolean for opening/closing profile menu
  
  accountOwner!:User;
  signedIn:boolean = this.sessionService.getSignInStatus();

  // Toggles overflow profile menu
  toggleProfileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  signOut() {
    this.sessionService.signOutSession();
  }


  constructor(
    private sessionService:SessionManagementService,
    private userService:UserManagementService,
    private renderer:Renderer2) {
      // Detects mouse click events
      this.renderer.listen('window', 'click', (e:Event) => {
        // if the mouse click happens outside an overflow button or menu, close the menu
        if(!this.overflowMenu?.nativeElement.contains(e.target)
          && !this.overflowMenuBtn?.nativeElement.contains(e.target)) {
          this.isMenuOpen = false;
        }       
      });
    }

  ngOnInit():void {
    // Fetch sign in status on log in
    if (this.signedIn) this.accountOwner = this.userService.getCurrentUser();
  }


}
