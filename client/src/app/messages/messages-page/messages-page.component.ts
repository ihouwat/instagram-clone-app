import { Component, OnInit } from '@angular/core';
import { SessionManagementService } from 'src/app/shared/services/session-management.service';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit {

  signedIn!:boolean; 
  SEARCHBOXSIZE:any = "xl"; // passes size attr to child search box component
  SEARCHBOXLIGHT:any = "light"; // passes color theme attr to child search box component

  constructor(private sessionService:SessionManagementService) { }

  ngOnInit(): void {
    this.signedIn = this.sessionService.getSignInStatus();
  }

}
