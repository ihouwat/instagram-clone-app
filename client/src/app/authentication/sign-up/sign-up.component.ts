import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit  {

  // Three form groups for multiform signup
  form = this.fb.group({
    accountDetails: this.fb.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: ['']
    }),
    uploadImage: this.fb.group({

    }),
    personalDetails: this.fb.group({
      
    })
  })

  // Form step
  currentStep!: number;

  // Steps for progress indicator
  steps = [
    {
      text: "Step 1",
      state: ["current"],
      optionalText: "Login info"
    },
    {
      text: "Step 2",
      state: ["current"],
      optionalText: "Upload image"
    },
    {
      text: "Step 3",
      state: ["current"],
      optionalText: "Details"
    }
  ]
  
  prev():void {
    this.currentStep--;
  }

  next():void {
    this.currentStep++;
  }

  getCurrentStep():number {
    return this.currentStep;
  }

  public get currentGroup(): FormGroup {
    return this.getGroupAt(this.currentStep);
  }

  private getGroupAt(index: number): FormGroup {
    const groups = Object.keys(this.form.controls).map(groupName =>
        this.form.get(groupName)
        ) as FormGroup[];
    return groups[index];
}

  onSubmit():void {}

  constructor(private fb:FormBuilder) { }  

  ngOnInit(): void {
    this.currentStep = 0;
  }

}
