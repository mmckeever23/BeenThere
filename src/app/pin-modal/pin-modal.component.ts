import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PindataService } from '../pindata.service';

@Component({
  selector: 'app-pin-modal',
  templateUrl: './pin-modal.component.html',
  styleUrls: ['./pin-modal.component.css']
})
export class PinModalComponent {

  @Input() data: any;
  @Input() lat!: Number;

  constructor(private pinDataService: PindataService, public modalService: NgbActiveModal){}

  ngOnInit(): void {
  }

  pinDataSave(){
    this.pinDataService.savePinData(this.lat).subscribe({
      next: (data) => {
        alert("Information saved!");
        this.modalService.dismiss();
      },
      error: (error) => {
        alert("Something went wrong. Information not saved.");
      }
    })
  }
}