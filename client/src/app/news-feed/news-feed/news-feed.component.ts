import { Component, OnInit } from '@angular/core';

import { User } from '../../models/types';
import { UserManagementService } from '../../shared/services/user-management.service'

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
})
export class NewsFeedComponent implements OnInit {
  user:User = this.userService.getUser();

  constructor(private userService:UserManagementService) { }

  ngOnInit(): void {}

}
