import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up.component';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
})
export class AccountDetailsComponent  {
  accountDetails = this.form.currentGroup;

  constructor(private form:SignUpComponent) { }

}
