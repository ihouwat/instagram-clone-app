import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit  {

  // Main form group
  signUpForm!:FormGroup;

  // Form step counter
  currentStep!:number;

  // Steps for progress indicator
  steps = [
    {
      text: "Step 1",
      state: ["current"],
      optionalText: "Account details"
    },
    {
      text: "Step 2",
      state: ["current"],
      optionalText: "Upload image"
    },
    {
      text: "Step 3",
      state: ["current"],
      optionalText: "Personal details"
    }
  ]
  
  // Button event to go back one step
  prev():void {
    this.currentStep--;
  }

  // Button event to go forward one step
  next():void {
    this.currentStep++;
  }

  // Track current form group
  public get currentGroup(): FormGroup {
    return this.getGroupAt(this.currentStep);
  }

  // Helper method for currentGroup()
  private getGroupAt(index: number): FormGroup {
    const groups = Object.keys(this.signUpForm.controls).map(groupName =>
        this.signUpForm.get(groupName)
        ) as FormGroup[];
    return groups[index];
}

  onSubmit():void {
    // If we have reached the end of the form
    if(this.currentStep === 2) {
      this.authService.signUpUser(this.signUpForm.value);
    };
  }

  constructor(
    private fb:FormBuilder, 
    private authService:AuthenticationService) { }  

  ngOnInit(): void {
    
    this.currentStep = 0;

    // Three form groups for multiform signup
    this.signUpForm = this.fb.group({
      accountDetails: this.fb.group({
        email: [''],
        fullName: [''],
        userName: [''],
        password: ['']
      }),
      uploadImage: this.fb.group({
        image: ['']
      }),
      personalDetails: this.fb.group({
        website: [''],
        description: ['']
      })
    })
  }

}
