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
  @Input() id: any;
  @Input() pins: any;

  renderPins(){
    this.pinDataService.getAllPins().subscribe(data=>{
      this.pins=data;
    })
  }

  constructor(private pinDataService: PindataService, public modalService: NgbActiveModal){}

  ngOnInit(): void {
    this.pinDataService.getPinById(this.pin.id).subscribe({
      next: (data) => {
        this.pin = data;
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }

  onSubmit(){
    this.pinDataService.updatePin(this.pin.id, this.pin).subscribe({
      next: (data) => {
        alert("Pin updated!");
        this.modalService.dismiss();
        },
      error: (error) => {
        alert("There was a problem updating this pin.");
      }
    }) 
  }
}