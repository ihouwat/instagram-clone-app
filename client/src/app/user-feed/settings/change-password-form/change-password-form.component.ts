import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/types';
import { SettingsFormService } from '../settings-form.service';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordForm implements OnInit {

  @Input() accountOwner!:User;
  changePasswordForm!:FormGroup;
  @Output() openDangerModal = new EventEmitter<Boolean>();

  onSubmit() {
    this.openDangerModal.emit(true);
    // this.settingsService.submitPasswordChange(this.changePasswordForm);
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
