import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/types';
import { SettingsFormService } from '../settings-form.service';

@Component({
  selector: 'app-account-settings-form',
  templateUrl: './account-settings-form.component.html',
})
export class AccountSettingsForm implements OnInit {

  accountOwner:User = this.settingsService.getAccount();
  accountSettingsForm!:FormGroup;

  onSubmit() {
   this.settingsService.submitAccountDetailChanges(this.accountSettingsForm);
  }

  resetForm() {
    this.accountSettingsForm.reset();
  }

  constructor(
    private fb:FormBuilder,
    private settingsService:SettingsFormService) { }

  ngOnInit(): void {
    this.accountSettingsForm = this.fb.group({
      image: [''],
      fullName: [''],
      email: [''],
      description: [''],
      website: ['']
    })
  }

}
