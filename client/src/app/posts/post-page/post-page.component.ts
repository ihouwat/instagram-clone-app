import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/model/types';
import { SessionManagementService } from 'src/app/shared/services/session-management.service';
import { UserManagementService } from 'src/app/shared/services/user-management.service';
import { PostManagementService } from '../../shared/services/post-management.service'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
})
export class PostPageComponent implements OnInit {

  post = {comments: {}} as Post;
  accountOwnerId:number = this.userService.getAccountOwner().id;

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
    return this.post.owner.id === this.accountOwnerId;
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
