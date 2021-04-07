import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post, User } from 'src/app/model/types';
import { SessionManagementService } from 'src/app/shared/services/session-management.service';
import { UserManagementService } from 'src/app/shared/services/user-management.service';
import { PostManagementService } from '../../shared/services/post-management.service'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
})
export class PostPageComponent implements OnInit {

  post = {comments: {}} as Post;
  currentUser:User = this.userService.getCurrentUser();

  /*
    Check if user is signed in. Determines whether user is allowed
    to 'follow' the post owner or to make comments on posts
  */
  isSignedIn():boolean {
    return this.sessionService.getSignInStatus();
  }

  /*
    Check if user is the post owner. Determines whether user can
    to 'follow' the post owners for posts that the user does not own
  */
  isPostOwner():boolean {
    return this.post.owner.id === this.currentUser.id;
  }

  // On pressing 'Follow' button, pass on to user service to add user to friends list
  followUserBtn():void {
    this.userService.followUser(this.post.owner.username);
  }

  // On pressing 'Unfollow' button, pass on to user service to remove user from friends list
  unfollowUserBtn():void {
    this.userService.unfollowUser(this.post.owner.username);
  }

  // Checks whether current user is 'friends' with post owner
  followsUser():boolean {
    return this.userService.isFollowingUser(this.post.owner.username);
  }

  // On pressing enter in comment box, send the comment, post id, and sender id to post service
  getCommentValue(target:EventTarget | null) {
    let inputValue:string = (target as HTMLInputElement).value;
    this.postService.addCommentToPost(inputValue, this.post.id, this.currentUser.id);
    
    (target as HTMLInputElement).value = ""; // Reset comment input box
  }

  // Checks if the current user likes the current post
  hasUserLikedPost():boolean {
    return this.postService.checkIfUserLikesPost(this.post.id);
  }

  /* 
    When user clicks on 'favorite' icon,
      1. Icon toggles between unfilled (ie, unliked) and filled (ie, liked) state
      2. Boolean flag and post id sent to user service to add/remove post from User's likedPosts array
  */
  toggleLikePostBtn() {
    let flag:boolean = this.postService.checkIfUserLikesPost(this.post.id);
    this.userService.toggleUserLikesPost(flag, this.post.id);
  }

  constructor(
    private postService:PostManagementService,
    private userService:UserManagementService,
    private sessionService:SessionManagementService,
    private route:ActivatedRoute) {
    }
    
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let {id} = params;
      this.post = this.postService.getPostById(+id); // unary plus for typecasting to number
    })
  }

}
