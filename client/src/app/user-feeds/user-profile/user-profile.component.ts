import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/types';
import { UserManagementService } from '../../shared/services/user-management.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {

  user!:User

  constructor(
    private route:ActivatedRoute,
    private userMgmtService:UserManagementService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // get the username out of the route params
      const username = params['username'];
      this.userMgmtService.getUserRoute(username);

    })
  }

}
