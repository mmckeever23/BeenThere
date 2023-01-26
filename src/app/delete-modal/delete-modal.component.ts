import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PindataService } from '../pindata.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

  @Input() data: any;
  @Input() pin: any;
  @Input() id: any;

  constructor(private pinDataService: PindataService, public activeModalService: NgbActiveModal, private modalService: NgbModal){}

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
    this.pinDataService.deletePin(this.pin.id).subscribe({
      next: (data) => {
        alert("Pin deleted!");
        this.modalService.dismissAll();
      },
      error: (error) => {
        alert("There was a problem deleting this pin.");
      }
    }) 
  }
}

