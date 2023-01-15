import { Component, Input, OnInit } from '@angular/core';
import { Pin } from '../pin';
import { PindataService } from '../pindata.service';

@Component({
  selector: 'app-pin-data',
  templateUrl: './pin-data.component.html',
  styleUrls: ['./pin-data.component.css']
})
export class PinDataComponent {
  
  @Input() pinData!: object;
  
  constructor(private pinDataService: PindataService){}

  ngOnInit(): void {
  }

  pinDataSave(){
    console.log(this.pinData);
    this.pinDataService.savePinData(this.pinData).subscribe({
      next: (data) => {
        alert("Pin saved!");
        
      },
      error: (error) => {
        alert("Something went wrong. Pin not saved.");
      }
    })
  }
}