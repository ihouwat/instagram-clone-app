import { Component, Input, OnInit } from '@angular/core';
import { PostsModule } from 'src/app/posts/posts.module';

import { Post } from '../../models/types';
import { PostManagementService} from '../../shared/services/post-management.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
})
export class NewsFeedComponent implements OnInit {
  
  posts!:Post[];

  getPosts = () => {
    this.posts = this.postService.loadPosts();
  }

  constructor(private postService:PostManagementService) { }

  ngOnInit(): void {
    this.getPosts();
  }

}
