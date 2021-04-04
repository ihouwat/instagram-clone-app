import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/types';
import { SettingsFormService } from '../settings-form.service';

@Component({
  selector: 'app-account-settings-form',
  templateUrl: './account-settings-form.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsForm implements OnInit {

  @Input() accountOwner!:User;
  accountSettingsForm!:FormGroup;

  onSubmit() {
   this.settingsForm.submitAccountDetailChanges(this.accountSettingsForm);
  }

  constructor(
    private fb:FormBuilder,
    private settingsForm:SettingsFormService) { }

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
