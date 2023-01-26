import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PinModalComponent } from './pin-modal/pin-modal.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { Pin } from './pin';
import { PindataService } from './pindata.service';
import { ViewModalComponent } from './view-modal/view-modal.component';
import { UpdatePinComponent } from './update-pin/update-pin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

// Declare variables

  title = 'frontend';
  pin: Pin = new Pin();
  pins: Pin[]=[];

  renderPins(){
    this.pinDataService.getAllPins().subscribe(data=>{
      this.pins=data;
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 35, lng: 5 },
        zoom: 3,
        minZoom: 2,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: "greedy",
        restriction: {
          latLngBounds: {
              north: 85,
              south: -85,
              west: -180,
              east: 180
          }
        }
      });
      for (let i = 0; i<this.pins.length; i++) {

        let marker = new google.maps.Marker({
          position: { lat: Number(this.pins[i].lat), lng: Number(this.pins[i].lng) },
          map,
          icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
        })
          marker.addListener("click", () => {
          this.pin.id=this.pins[i].id;
          this.pin.name=this.pins[i].name;
          this.pin.departDate=this.pins[i].departDate;
          this.pin.log=this.pins[i].log;
          this.pin.title=this.pins[i].title;
          this.pin.lat=this.pins[i].lat;
          this.pin.lng=this.pins[i].lng;
          this.pin.imageUrl1=this.pins[i].imageUrl1;
          this.pin.imageUrl2=this.pins[i].imageUrl2;
          this.pin.imageUrl3=this.pins[i].imageUrl3;
          this.openViewModal();
          })  
        }
      })
    alert("Updates saved!")
  }

  reloadPage(){
    location.reload();
    alert("User logged out!")
  }

  constructor(private modalService: NgbModal, private pinDataService: PindataService) {}

// Modal functions

  openPinModal() {
    const modalRef = this.modalService.open(PinModalComponent, {size: 'lg', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.pin = this.pin;
  }

  openLoginModal() {
    this.modalService.open(UserLoginComponent, {size: 'md', backdrop: 'static', modalDialogClass: 'modal-dialog-centered'});
  }

  openViewModal(){
    const modalRef = this.modalService.open(ViewModalComponent, {size: 'lg', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.pin = this.pin;
    modalRef.componentInstance.pins = this.pins;
  }

  openUpdateModal(){
    const modalRef = this.modalService.open(UpdatePinComponent, {size: 'lg', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.pin = this.pin;
    modalRef.componentInstance.pins = this.pins;
    modalRef.componentInstance.id = this.pin.id;
  }

// Google Maps JavaScript API Loader

  ngOnInit():void {
    this.openLoginModal();
  }

}   