import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { NgForm } from '@angular/forms';
import { ViewModalComponent } from '../view-modal/view-modal.component';
import { PindataService } from '../pindata.service';
import { Loader } from '@googlemaps/js-api-loader';
import { PinModalComponent } from '../pin-modal/pin-modal.component';
import { Pin } from '../pin';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User = new User();
  data = '';
  @Input() id: any;
  pin: Pin = new Pin();
  pins: Pin[]=[];

  constructor(private loginuserservice: LoginuserService, private modalService: NgbModal, private activeModalService: NgbActiveModal, public pinDataService: PindataService) {}

  ngOnInit(): void {
    this.pinDataService.getAllPins().subscribe(data=>{
      this.pins=data;
    })
  }

  userLogin(login: NgForm){
    this.loginuserservice.loginUser(this.user).subscribe({
      next: (data) => {
      this.activeModalService.dismiss();
      this.dropPins();
    },
      error: (error) => {
        alert("Username and/or password not correct.");
      }
    })
    login.reset();
  }

  openRegisterModal() {
    const modalRef = this.modalService.open(RegisterUserComponent, {size: 'md', backdrop: 'static', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.data = this.data;
  }

  openViewModal(){
    const modalRef = this.modalService.open(ViewModalComponent, {size: 'lg', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.pin = this.pin;
    modalRef.componentInstance.pins = this.pins;
  }

  openPinModal() {
    const modalRef = this.modalService.open(PinModalComponent, {size: 'lg', modalDialogClass: 'modal-dialog-centered'});
    this.pin.title = "";
    this.pin.departDate = "";
    this.pin.log = "";
    this.pin.imageUrl1 = "";
    this.pin.imageUrl2 = "";
    this.pin.imageUrl3 = "";
    modalRef.componentInstance.pin = this.pin;
  }

  dropPins(){
    const loader = new Loader({
      apiKey: 'AIzaSyBytbyDdTAD1-nmC-GG9KOUgRiLGoA06ZI',
      libraries: ["places"],
    })

// Declaration of map object

    let map: google.maps.Map;

// Render all pins

  this.pinDataService.getAllPins().subscribe(data=>{
    this.pins=data;
  })

// Loader function

    loader.load().then(() => {
     
// Render map

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

// Create the search box and link it to the UI element

      const input = document.getElementById("pac-input") as HTMLInputElement;
      const searchBox = new google.maps.places.SearchBox(input);

//Render saved pins

      for (let i = 0; i<this.pins.length; i++) {

        let marker = new google.maps.Marker({
          position: { lat: Number(this.pins[i].lat), lng: Number(this.pins[i].lng) },
          map,
          icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
          animation: google.maps.Animation.DROP,
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

// Listen for the event fired when the user selects a prediction and retrieve more details for that place

      searchBox.addListener("places_changed", () => {
        const places: any = searchBox.getPlaces();

// For each place, get the name and location

        places.forEach((place: any) => {

// Create a new pin and add click handler
          
          const marker = new google.maps.Marker({
            map,
            icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
            title: place.name,
            position: place.geometry.location,
            animation: google.maps.Animation.DROP,
            })
          this.pin.name=place.name;
          map.setCenter(marker.getPosition() as google.maps.LatLng);
          setTimeout(()=>{this.openPinModal()}, 1000);
          this.pin.lat = String(marker.getPosition()!.lat());
          this.pin.lng = String(marker.getPosition()!.lng());
                    
// Click handler for pre-existing marker

          marker.addListener("click", () => {
            this.pin.name=place.name;
            this.openViewModal();
          })       
        })
      })
    })

   
  }
}
