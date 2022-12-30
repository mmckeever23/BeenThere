import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'BeenThere';
  data = 'St. Louis';

//Modal

  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.data = this.data;
  }

//Google Maps JavaScript API Loader

  ngOnInit():void {
    const loader = new Loader({
      apiKey: 'AIzaSyBytbyDdTAD1-nmC-GG9KOUgRiLGoA06ZI',
      libraries: ["places"],
    })

//Declaration of Google Map objects
    let map: google.maps.Map;
    let markers: google.maps.Marker[] = [];

//Load function

    loader.load().then(() => {
      
//Load map

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

// Create the search box and link it to the UI element.

      const input = document.getElementById("pac-input") as HTMLInputElement;
      const searchBox = new google.maps.places.SearchBox(input);

// Listen for the event fired when the user selects a prediction and retrieve more details for that place.

      searchBox.addListener("places_changed", () => {
        const places: any = searchBox.getPlaces();

// For each place, get the icon, name and location.

        places.forEach((place: any) => {

// Create a marker, click handler for pre-existing markers

          const marker = new google.maps.Marker({
            map,
            icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
            title: place.name,
            position: place.geometry.location,
            animation: google.maps.Animation.DROP,
            })
          this.data=place.name;
          map.setCenter(marker.getPosition() as google.maps.LatLng);
          setTimeout(()=>{this.openModal()}, 1000);
          

          marker.addListener("click", () => {
            this.data=place.name;
            map.setCenter(marker.getPosition() as google.maps.LatLng);
            this.openModal();
            })
          markers.push(marker);
        })
      })
    })
  }
}   




