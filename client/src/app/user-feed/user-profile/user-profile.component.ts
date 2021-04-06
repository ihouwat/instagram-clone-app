import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../model/types';
import { UserManagementService } from '../../shared/services/user-management.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {

  user!:User;

  getUserProfile() {
    this.route.params.subscribe(params => {
      // get the username out of the route params
      const username = params['username'];
      this.user = this.userService.getUser(username);
    })

  }

  constructor(
    private route:ActivatedRoute,
    private userService:UserManagementService,
    ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

}
