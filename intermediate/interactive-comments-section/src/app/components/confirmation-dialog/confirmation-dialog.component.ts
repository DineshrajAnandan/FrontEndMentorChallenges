import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  @Output() confirm = new EventEmitter<boolean>();

  handleConfirmation(value: boolean) {
    this.confirm.emit(value);
  }
}
