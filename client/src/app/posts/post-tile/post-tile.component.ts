import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../../models/types';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
})
export class PostTileComponent implements OnInit {

  @Input() post!:Post;

  constructor() { }

  ngOnInit(): void {
  }

}
