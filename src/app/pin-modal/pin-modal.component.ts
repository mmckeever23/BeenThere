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
  @Input() pins: any;

  constructor(private pinDataService: PindataService, public modalService: NgbActiveModal){}

  ngOnInit(): void {
  }

  getPins(): void {
    this.pinDataService.getPins().subscribe({
      next: (data) => {
        this.pins = data;
      },
      error: (error) => {
        alert("There was a problem loading the pins.");
      }
    })
  }

  pinSave(){
    this.pinDataService.addPin(this.pin).subscribe({
      next: (data) => {
        alert("Pin created!");
        this.modalService.dismiss();
        this.getPins();
      },
      error: (error) => {
        alert("There was a problem creating this pin.");
      }
    })
  }
}