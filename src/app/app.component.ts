import { Component, OnInit, platformCore } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PinModalComponent } from './pin-modal/pin-modal.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { Pin } from './pin';
import { PindataService } from './pindata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

// Declare variables

  title = 'frontend';
  data = '';
  pin: Pin = new Pin();
  pins: Pin[]=[];
  
  constructor(private modalService: NgbModal, private pinDataService: PindataService) {}

//Functions for saving pins

  pinSave(){
    this.pinDataService.savePins(this.pin).subscribe({
      next: (data) => {},
      error: (error) => {
        alert("There was a problem creating the pin.");
      }
    })
  }

// Modal functions

  openPinModal() {
    const modalRef = this.modalService.open(PinModalComponent, {size: 'lg', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.data = this.data;
  }

  openLoginModal() {
    const modalRef = this.modalService.open(UserLoginComponent, {size: 'md', backdrop: 'static', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.data = this.data;
  }

// Google Maps JavaScript API Loader

  ngOnInit():void {
    const loader = new Loader({
      apiKey: 'AIzaSyBytbyDdTAD1-nmC-GG9KOUgRiLGoA06ZI',
      libraries: ["places"],
    })

// Declaration of map object

    let map: google.maps.Map;

// Send pin data to backend

    this.pinDataService.getAllPins().subscribe(data=>{
      this.pins=data;
    })

// Loader function

    loader.load().then(() => {
     
// Render Login modal

      this.openLoginModal();

// Render map

      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
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
          this.data=this.pins[i].name;
          map.setCenter(marker.getPosition() as google.maps.LatLng);
          this.openPinModal();
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
          this.data=place.name;
          this.pin.name=place.name;
          map.setCenter(marker.getPosition() as google.maps.LatLng);
          setTimeout(()=>{this.openPinModal()}, 1000);
          this.pin.lat = String(marker.getPosition()!.lat());
          this.pin.lng = String(marker.getPosition()!.lng());
          this.pinSave();
          marker.addListener("click", () => {
            this.data=place.name;
            map.setCenter(marker.getPosition() as google.maps.LatLng);
            this.openPinModal();
          })  
        })
      })
    })
  }
}   
