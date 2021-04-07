import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/model/types';
import { UserManagementService } from 'src/app/shared/services/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsFormService {

  /* 
    If user changes account details, pass on to the user service
  */
  submitAccountDetailChanges(fg:FormGroup) {
    this.userService.setUserAccountDetails(fg);
  }

  /* 
    If user confirms password change in modal child component,
    pass on to the user service
  */
  submitPasswordChange(fg:FormGroup) {
    this.userService.setUserPassword(fg);
  }

  // Getter method to populate the account details form
  getAccount():User {
    return this.userService.getCurrentUser();
  }

  constructor(private userService:UserManagementService) {}
}
