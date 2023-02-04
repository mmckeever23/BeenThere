import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pin } from '../pin';
import { PindataService } from '../pindata.service';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent {

  @Input() data: any;
  @Input() pin: any;
  @Input() pins: any;
  @Input() id: any;
  
  constructor(public activeModalService: NgbActiveModal, private pinDataService: PindataService){}

  sortFn = (a: Pin, b: Pin): number => {
    if (a.departDate < b.departDate) {
      return 1;
    } else if (a.departDate === b.departDate) {
      return 0;
    } else (a.departDate > b.departDate); {
      return -1;
    }
  }

  convertDate() {
    let day = new Date(this.pin.departDate).getDate();
    let month = new Date(this.pin.departDate).toLocaleString('default', {month: 'long'});
    let year = new Date(this.pin.departDate).getFullYear();
    let newDateFormat = `${month} ${day}, ${year}`;
    return newDateFormat;
    }

  ngOnInit(): void {
      this.pinDataService.getAllPins().subscribe(data=>{
        this.pins=data;
      })
    }

}

