import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  ngOnInit(): void {}

  onSubmit(newPin: NgForm){
    this.pinDataService.savePin(this.pin).subscribe({
      next: (data) => {
        alert("Pin saved!");
        this.modalService.dismiss();
        newPin.reset();  
      },
      error: (error) => {
        alert("There was a problem saving this pin.");
      }
    }) 
  }


}