import { Injectable } from '@angular/core';

import { User } from '../../model/types';
import { Router } from "@angular/router";
import { SessionManagementService } from './session-management.service';

// Mock users
import { USERS } from '../../../mock/userDB';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  // * This service is to manage user information and updates to profile information

  // For now, manually get user email from login page and redirect to user page
  navigateToUserRoute(username: string):void {
    const user = this.findSingleUserByUsername(username);
    if (user) this.router.navigate([`/user/${user.username}`]);
    else this.router.navigate(['/404']);
  }

  getUser(username:string):User {
    const user = this.findSingleUserByUsername(username);
    return user;
  }

  getCurrentUser():User {
    return this.sessionService.getSessionInfo();
  }

  findSingleUserByUsername(username:string) {
    let userObj = USERS.filter((u:User) => u.username.toLowerCase() === username.toLowerCase());
    return userObj[0];
  }

  searchForUsers(input:string) {
    let usersList = USERS.filter((u:User) => u.username.toLowerCase().includes(input));
    return usersList;
  }

  // From settings page
  setUserAccountDetails(fg:FormGroup) {
    console.log(fg.value);
  }

  // From settings page
  setUserPassword(fg:FormGroup) {
    console.log(fg.value);
  }

  // Add user to 'friends' list
  followUser(username:string) {
    console.log("follow ", username);
  }

  // Remove user from 'friends' list
  unfollowUser(username:string) {
    console.log("unfollow ", username);
  }

  // Checks if current user is following another user
  isFollowingUser(usernameInput:string):boolean {
    let filterFriendsArray = 
      this.sessionService
        .getSessionInfo()
          .listOfFollowing.filter(user => user.username === usernameInput);
          
    /* 
      If another user is found in the account owner's list of friends
      findFriendArray.length is larger than 0. Return value below is boolean
    */
    return filterFriendsArray.length > 0; 
  }

  // Add or remove a post id from the current user's likedPosts array
  toggleUserLikesPost(flag:boolean, postID:number, user = this.getCurrentUser()) {
    // If flag is true, user previously liked post and will not unlike it
    if(flag === true) {
      console.log("User no longer likes this post");
    }
    else {
      console.log("User now likes this post");
    }
  }

  constructor(
    private router:Router,
    private sessionService:SessionManagementService) { }
}
