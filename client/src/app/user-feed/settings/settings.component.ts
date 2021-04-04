import { Component, ViewChild, OnInit } from '@angular/core';
import { User } from 'src/app/models/types';

import { FormModalComponent } from './form-modal/form-modal.component';
import { SettingsFormService } from './settings-form.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  accountOwner:User = this.settingsService.getAccountOwner();
  @ViewChild(FormModalComponent) modal!:FormModalComponent;
  modalIsOpen:boolean = false; 

  openModalEvent(val:boolean){
    this.modalIsOpen = val;
    console.log(val);
    // this.modal.openModal()
  }

  constructor(private settingsService:SettingsFormService) { }

  ngOnInit(): void {
    console.log(this.modal);
  }
  

}
