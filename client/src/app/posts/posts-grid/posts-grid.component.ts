import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post, User } from '../../model/types';
import { PostManagementService } from '../../shared/services/post-management.service'


@Component({
  selector: 'app-posts-grid',
  templateUrl: './posts-grid.component.html',
})
export class PostsGridComponent implements OnInit {

  @Input() user!:User;
  posts!:Post[];

  determinePostsByRoute() {
    if (this.router.url.includes('user')){
      this.posts = this.postService.getUserPosts(this.user);
    }

    else if (this.router.url.includes('home')) {
      this.posts = this.postService.getNewsFeedPosts(this.user);
    }
  }

  constructor(
    private router:Router,
    private postService:PostManagementService) { }

  ngOnInit(): void {
    this.determinePostsByRoute()
  }

}
