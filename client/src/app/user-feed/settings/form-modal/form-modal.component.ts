import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/types';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  modalIsOpen:boolean = false;

  @Output() changePasswordChange = new EventEmitter<Boolean>();

  openModal():boolean {
    return this.modalIsOpen = true;
  }

  closeModal(e:Event):boolean {
    if ((e.target as Element).id === "Update")
      this.changePasswordChange.emit(true);
    return this.modalIsOpen = false;
  }

  constructor() { }

  ngOnInit(): void {}

}
