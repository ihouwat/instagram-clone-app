import { Component, Input, OnInit } from '@angular/core';

import { POSTS } from '../../../mock/postsDB';
import { Post } from '../../models/types';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
})
export class PostTileComponent implements OnInit {

  // @Input() post!:Post;
  post:Post = POSTS[0];

  constructor() { }

  ngOnInit(): void {
  }

}
