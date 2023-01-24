import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PinModalComponent } from '../pin-modal/pin-modal.component';
import { UpdatePinComponent } from '../update-pin/update-pin.component';

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

  openUpdateModal(){
    const modalRef = this.modalService.open(UpdatePinComponent, {size: 'lg', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.pin = this.pin;
    modalRef.componentInstance.pins = this.pins;
  }
}

