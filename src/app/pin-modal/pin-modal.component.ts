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
  @Input() id: any;
  @Input() pins: any;

  constructor(private pinDataService: PindataService, public activeModalService: NgbActiveModal){}

  ngOnInit(): void {
    this.pinDataService.getPinById(this.pin.id).subscribe({
      next: (data) => {
        this.pin = data;
      }, 
    })
  }

  onSubmit(){
    this.pinDataService.savePin(this.pin).subscribe({
      next: (data) => {
        alert("Pin saved!");
        this.activeModalService.dismiss();
      },
      error: (error) => {
        alert("There was a problem saving this pin.");
      }
    }) 
  }
}