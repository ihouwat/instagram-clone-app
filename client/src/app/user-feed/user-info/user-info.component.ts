import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/types';
import { SessionManagementService } from '../../shared/services/session-management.service'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {

  @Input() user!:User;
  isSignedIn!:boolean;

  constructor(private sessionService:SessionManagementService) { }

  ngOnInit(): void {
    this.isSignedIn = this.sessionService.getSignInStatus();
  }

}
