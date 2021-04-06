import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { SettingsFormService } from '../settings-form.service';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
})
export class ChangePasswordForm implements OnInit {

  changePasswordForm!:FormGroup;
  
  // Connection to form modal child component
  @ViewChild(FormModalComponent) modal!:FormModalComponent;

  // When submitting pwd change, open danger modal
  onSubmit() {
    this.modal.openModal();
  }

  // When user confirms password update in modal, send info to service
  updatePassword(flag:Boolean) {
    flag === true 
    ? this.settingsService.submitPasswordChange(this.changePasswordForm)
    : null;
  }

  constructor(
    private fb:FormBuilder,
    private settingsService:SettingsFormService) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      oldPassword: [''],
      newPassword: [''],
      confirmNewPassword: ['']
    })
  }

}
