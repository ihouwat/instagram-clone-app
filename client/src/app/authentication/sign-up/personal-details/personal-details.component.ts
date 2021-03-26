import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up.component';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
})
export class PersonalDetailsComponent {
  personalDetails = this.form.currentGroup;

  constructor(private form:SignUpComponent) { }

  ngOnInit(): void {
  }

}
