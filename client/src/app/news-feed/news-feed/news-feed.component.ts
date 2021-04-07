import { Component, OnInit } from '@angular/core';

import { User } from '../../model/types';
import { UserManagementService } from '../../shared/services/user-management.service'

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
})
export class NewsFeedComponent implements OnInit {
  currentUser:User = this.userService.getCurrentUser();

  constructor(private userService:UserManagementService) { }

  ngOnInit(): void {}

}
