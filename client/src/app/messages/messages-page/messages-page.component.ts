import { Component, OnInit } from '@angular/core';
import { SessionManagementService } from 'src/app/shared/services/session-management.service';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit {

  signedIn!:boolean;

  constructor(private sessionService:SessionManagementService) { }

  ngOnInit(): void {
    this.signedIn = this.sessionService.getSignInStatus();
  }

}
