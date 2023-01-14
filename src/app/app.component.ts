import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PinModalComponent } from './pin-modal/pin-modal.component';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'frontend';
  data = '';
  
// Modal functions

  constructor(private modalService: NgbModal) {}

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

// Declaration of Google Map objects
    let map: google.maps.Map;
    let markers: google.maps.Marker[] = [];

// Load function

    loader.load().then(() => {
     
// Load Login modal

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

// Listen for the event fired when the user selects a prediction and retrieve more details for that place

      searchBox.addListener("places_changed", () => {
        const places: any = searchBox.getPlaces();

// For each place, get the name and location

        places.forEach((place: any) => {

// Create a marker

          const marker = new google.maps.Marker({
            map,
            icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
            title: place.name,
            position: place.geometry.location,
            animation: google.maps.Animation.DROP,
            })
          this.data=place.name;
          map.setCenter(marker.getPosition() as google.maps.LatLng);
          setTimeout(()=>{this.openPinModal()}, 1000);
          // console.log("" + marker.getPosition());
          console.log("" + marker.getPosition());
                    
// Click handler for pre-existing marker

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
