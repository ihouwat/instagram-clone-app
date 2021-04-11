import { Injectable } from '@angular/core';
import { Post, User } from '../../model/types';

// Mock posts
import { POSTS } from '../../../mock/postsDB';
import { UserManagementService } from './user-management.service';

@Injectable({
  providedIn: 'root'
})
export class PostManagementService {
  
  getUserPosts(user:User):Post[] {
    let userPosts = POSTS.filter((p:any) => p.owner.username.toLowerCase() === user.username.toLowerCase());
    return userPosts;
  }

  getNewsFeedPosts(user:User):Post[] {
    // fetch posts by other friends ONLY account owner info. Most of the work will be dnoe by server
    return POSTS;
  }

  // Determine post to display in PostPageComponent
  getPostById(id:number):Post {
    let post = POSTS.filter((p:any) => p.id === id);
    return post[0];
  }

  // Receive from PostPageComponent
  addCommentToPost(comment:string, postID:number, sender:number) {
    console.log(
      "comment", comment, 
      "postID", postID,
      "sender", sender);
  }

  // Checks if current user has liked a post
  checkIfUserLikesPost(postID:number) {
    // Fetch list of current user's liked posts
    let currentUserLikedPosts = this.userService.getCurrentUser().likedPosts;

    // Check if the current user liked the post input value
    let filterLikedPosts = currentUserLikedPosts.filter(post => post.id === postID);

    return filterLikedPosts.length > 0; // returns true if there is a match    
  }

  constructor(private userService:UserManagementService) { }
}
