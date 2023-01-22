import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PindataService } from '../pindata.service';

@Component({
  selector: 'app-pin-modal',
  templateUrl: './pin-modal.component.html',
  styleUrls: ['./pin-modal.component.css']
})
export class PinModalComponent {

  @Input() data: any;
  @Input() pin: any;

  constructor(private pinDataService: PindataService, public modalService: NgbActiveModal){}

  ngOnInit(): void {
  }

  pinSave(){
    console.log(this.pin.title);
    this.pinDataService.savePins(this.pin).subscribe({
      next: (data) => {
        alert("Pin created!");
        this.modalService.dismiss();
      },
      error: (error) => {
        alert("There was a problem creating this pin.");
      }
    })
  }
}