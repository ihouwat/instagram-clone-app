import { Component, OnInit } from '@angular/core';
import { SessionManagementService } from '../../shared/services/session-management.service'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {

  isSignedIn!:boolean;

  constructor(private sessionMgmtService:SessionManagementService) { }

  ngOnInit(): void {
    this.isSignedIn = this.sessionMgmtService.isSignedIn;
  }

}
