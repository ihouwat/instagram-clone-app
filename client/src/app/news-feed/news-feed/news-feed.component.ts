import { Component, OnInit } from '@angular/core';

import { User } from '../../model/types';
import { UserManagementService } from '../../shared/services/user-management.service'

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
})
export class NewsFeedComponent implements OnInit {
  accountOwner = this.userService.getAccountOwner();

  constructor(private userService:UserManagementService) { }

  ngOnInit(): void {}

}
