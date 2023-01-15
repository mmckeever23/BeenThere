import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PindataService } from '../pindata.service';

@Component({
  selector: 'app-pin-data',
  templateUrl: './pin-data.component.html',
  styleUrls: ['./pin-data.component.css']
})
export class PinDataComponent {

  @Input() data: any;
  @Input() position: any;

  constructor(private pinDataService: PindataService, public modalService: NgbActiveModal){}

  ngOnInit(): void {
  }

  pinDataSave(){
    console.log(this.position);
    this.pinDataService.savePinData(this.position).subscribe({
      next: (data) => {
        alert("Pin saved!");
        this.modalService.dismiss();
      },
      error: (error) => {
        alert("Something went wrong. Pin not saved.");
      }
    })
  }

}
