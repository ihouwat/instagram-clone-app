import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up.component';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
})
export class UploadImageComponent {
  uploadImage = this.form.currentGroup;
  
  constructor(private form:SignUpComponent) { }

  ngOnInit(): void {
  }

}
