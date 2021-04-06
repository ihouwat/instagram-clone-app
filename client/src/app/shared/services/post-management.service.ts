import { Injectable } from '@angular/core';
import { Post, User } from '../../model/types';

// Mock posts
import { POSTS } from '../../../mock/postsDB';

@Injectable({
  providedIn: 'root'
})
export class PostManagementService {
  
  getUserPosts(user:User):Post[] {
    return POSTS;
  }

  getNewsFeedPosts(user:User):Post[] {
    // fetch ONLY account owner info. Most of the work will be dnoe by server
    return POSTS;
  }

  getPostById(id:number):Post {
    let post = POSTS.filter((p:any) => p.id === id);
    return post[0];
  }

  constructor() { }
}
