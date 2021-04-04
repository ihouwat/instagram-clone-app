import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/types';
import { UserManagementService } from 'src/app/shared/services/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsFormService {
  
  /* 
    If user confirms password change in modal child component,
    pass on to the server
  */
  // changePasswordChange(val:Boolean) {
  //   console.log(val);
  //   console.log(this.changePasswordForm.value);
  // Open 'are you sure' modal if changing password
  // this.modal.openModal();
  // }

  submitAccountDetailChanges(fg:FormGroup) {
    console.log(fg.value);
  }

  submitPasswordChange(fg:FormGroup) {
  }

  getAccountOwner():User {
    return this.userService.getAccountOwner();
  }
  constructor(private userService:UserManagementService) {}
}
