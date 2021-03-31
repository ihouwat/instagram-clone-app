import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, Post } from '../../models/types';
import { UserManagementService } from '../../shared/services/user-management.service';
import { PostManagementService} from '../../shared/services/post-management.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {

  user!:User
  posts:Post[] = this.postService.loadPosts();

  getUserProfile() {
    this.route.params.subscribe(params => {
      // get the username out of the route params
      const username = params['username'];
      this.user = this.userService.getUser();
    })

  }

  constructor(
    private route:ActivatedRoute,
    private userService:UserManagementService,
    private postService:PostManagementService,
    ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

}
