import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';

import { PostsModule } from '../posts/posts.module';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [
    CommonModule,
    PostsModule
  ]
})
export class NewsFeedModule { }
