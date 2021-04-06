import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../model/types';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
})
export class PostTileComponent implements OnInit {

  @Input() post!:Post;

  hasNewsFeedRoute():boolean {
    return this.router.url.includes('home');
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
