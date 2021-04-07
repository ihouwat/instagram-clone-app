import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/types';
import { UserManagementService } from 'src/app/shared/services/user-management.service';
import { SessionManagementService } from '../../shared/services/session-management.service'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {

  @Input() user!:User; // Input to display any user
  isSignedIn!:boolean;
  currentUser!:User; // Tracks current logged in user

  // Helper fn determines if current user is visiting their own page
  isCurrentUser():boolean {
    return this.user.username === this.currentUser.username;
  }

  // Helper fn determines whether current user is 'friends' with post owner
  followsUser():boolean {
    return this.userService.isFollowingUser(this.user.username);
  }

  /* 
    Determine which profile button to display. Choices are:
    Edit Profile, Follow, Unfollow
  */
  displayUserButton():string{

    let returnVal:string = "";

    // If you are not signed in, do not display buttons
    if (!this.isSignedIn) return returnVal;

    // If signed in, determine which button to display
    else {
      if (this.isCurrentUser()) returnVal = "CURRENT_USER";
      else if (this.followsUser()) returnVal = "UNFOLLOW_BTN";
      else if (!this.followsUser()) returnVal = "FOLLOW_BTN";
    }

    return returnVal;
  }

  // On pressing 'Follow' button, pass on to user service to add user to friends list
  followUserBtn():void {
    this.userService.followUser(this.user.username);
  }

  // On pressing 'Unfollow' button, pass on to user service to remove user from friends list
  unfollowUserBtn():void {
    this.userService.unfollowUser(this.user.username);
  }

  // On pressing 'Edit Profile' button, navigate to settings page
  editProfileBtn():void {
    this.router.navigate(['settings'], {relativeTo: this.route});
  }
  
  constructor(
    private sessionService:SessionManagementService,
    private userService:UserManagementService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.isSignedIn = this.sessionService.getSignInStatus();
    this.currentUser = this.userService.getCurrentUser();
  }

}
