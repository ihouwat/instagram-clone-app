import { Component, OnInit } from '@angular/core';

import { UserManagementService } from '../../shared/services/user-management.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
