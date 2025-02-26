import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {


  @Input() registerSuccess: boolean = false;
  @Input() message: string = '';

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  close() {
    this.closeModal.emit(false);
  }
}
