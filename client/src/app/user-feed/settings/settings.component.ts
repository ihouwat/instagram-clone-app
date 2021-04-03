import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/types';

import { UserManagementService } from '../../shared/services/user-management.service'
import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  accountOwner!:User; // get account info
  accountSettingsForm!:FormGroup;
  changePasswordForm!:FormGroup;

  // Modal component trigger 
  @ViewChild(FormModalComponent) modal!:FormModalComponent;
  modalIsOpen:boolean = false; 


  onSubmit(fg:FormGroup) {
    // Open 'are you sure' modal if changing password
    if (fg === this.changePasswordForm) {
      this.modal.openModal();
    }
  }

  /* 
    If user confirms password change in modal child component,
    pass on to the server
  */
  changePasswordChange(val:Boolean) {
    console.log(val);
    console.log(this.changePasswordForm.value);
  }

  // TODO Validation for later
  /*
  this.accountSettingsForm.valueChanges.subscribe((v:any) => {
    console.log(v);
  }); 
  */

  constructor(
    private userService:UserManagementService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.accountOwner = this.userService.getAccountOwner();

    this.accountSettingsForm = this.fb.group({
      image: [''],
      fullName: [''],
      email: [''],
      description: [''],
      website: ['']
    })

    this.changePasswordForm = this.fb.group({
      oldPassword: [''],
      newPassword: [''],
      confirmNewPassword: ['']
    })
    
  }

}
