import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
})
export class FormModalComponent implements OnInit {

  // On initialization, modal is closed
  modalIsOpen:boolean = false;
  // Event emitter once password update is confirmed
  @Output() confirmPasswordUpdate = new EventEmitter<Boolean>();

  openModal():boolean {
    return this.modalIsOpen = true;
  }

  closeModal(e:Event):boolean {
    // If user clicks 'update' button in modal, send confirmation to the ChangePasswordForm component
    if ((e.target as Element).id === "confirmPasswordUpdate")
      this.confirmPasswordUpdate.emit(true);
    
    // close the modal
    return this.modalIsOpen = false;
  }

  constructor() { }

  ngOnInit(): void {}

}
