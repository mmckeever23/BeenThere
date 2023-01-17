import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PindataService } from '../pindata.service';
import { Pin } from '../pin';

@Component({
  selector: 'app-pin-modal',
  templateUrl: './pin-modal.component.html',
  styleUrls: ['./pin-modal.component.css']
})
export class PinModalComponent {

  @Input() data: any;

  constructor(private pinDataService: PindataService, public modalService: NgbActiveModal){}

  ngOnInit(): void {
  }

  // pinDataSave(){
  //   this.pinDataService.savePinData(user).subscribe({
  //     next: (data) => {
  //       alert("Information saved!");
  //       this.modalService.dismiss();
  //     },
  //     error: (error) => {
  //       alert("Something went wrong. Information not saved.");
  //     }
  //   })
  // }
}