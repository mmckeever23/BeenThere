import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PindataService } from '../pindata.service';

@Component({
  selector: 'app-update-pin',
  templateUrl: './update-pin.component.html',
  styleUrls: ['./update-pin.component.css']
})
export class UpdatePinComponent {

  @Input() data: any;
  @Input() pin: any;

  constructor(private pinDataService: PindataService, public modalService: NgbActiveModal){}

  ngOnInit(): void {}

  pinUpdate(){
    this.pinDataService.savePins(this.pin).subscribe({
      next: (data) => {
        alert("Pin edited!");
        this.modalService.dismiss();
      },
      error: (error) => {
        alert("There was a problem editing this pin.");
      }
    })
  }
}