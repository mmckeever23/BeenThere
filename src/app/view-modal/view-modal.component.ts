import { DOCUMENT } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { PinModalComponent } from '../pin-modal/pin-modal.component';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent {

  @Input() data: any;
  @Input() pin: any;
  @Input() pins: any;
  
    constructor(public modalService: NgbModal, public activeModalService: NgbActiveModal){}

  ngOnInit(): void {}

  openPinModal() {
    const modalRef = this.modalService.open(PinModalComponent, {size: 'lg', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.data = this.data;
    modalRef.componentInstance.pin = this.pin;
  }
}

