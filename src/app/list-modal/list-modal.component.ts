import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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

  ngOnInit(): void {
      this.pinDataService.getAllPins().subscribe(data=>{
        this.pins=data;
      })
    }

}
