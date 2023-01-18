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
  @Input() pin: any;

  constructor(private pinDataService: PindataService, public modalService: NgbActiveModal){}

  ngOnInit(): void {}

  pinSave(){
    console.log(this.pin);
    this.pinDataService.savePins(this.pin).subscribe({
      next: (data) => {
        alert("Pin created!");
      },
      error: (error) => {
        alert("There was a problem creating the pin.");
      }
    })
  }


}