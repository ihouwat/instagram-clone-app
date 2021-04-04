import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  modalIsOpen:boolean = false;

  @Output() confirmPasswordUpdate = new EventEmitter<Boolean>();

  openModal():boolean {
    return this.modalIsOpen = true;
  }

  closeModal(e:Event):boolean {
    if ((e.target as Element).id === "confirmPasswordUpdate")
      this.confirmPasswordUpdate.emit(true);
    return this.modalIsOpen = false;
  }

  constructor() { }

  ngOnInit(): void {}

}
