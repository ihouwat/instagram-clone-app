import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  // Main form group
  loginForm!: FormGroup;

  onSubmit():void {
    this.authService.validateLoginForm(this.loginForm.value);
  }

  constructor(
    private fb:FormBuilder,
    private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    })
  }

}
