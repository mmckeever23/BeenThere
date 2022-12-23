import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'BeenThere';

  //Google Maps JavaScript API Loader

  ngOnInit():void {
    const loader = new Loader({
      apiKey: 'AIzaSyBytbyDdTAD1-nmC-GG9KOUgRiLGoA06ZI',
      libraries: ["places"]
    })

    //Declaration of Google Maps objects

    let map: google.maps.Map;
    let service: google.maps.places.PlacesService;
    let infowindow: google.maps.InfoWindow;

    loader.load().then(() => {
      
      //Load map

      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        streetViewControl: false,
        fullscreenControl: false,
      });

      //Event listener for dropping pin

      map.addListener("click", (event: google.maps.MapMouseEvent) => {
        addMarker(event.latLng!);
        });

      //Function for dropping pin

      function addMarker(position: google.maps.LatLng | google.maps.LatLngLiteral) {
        const marker = new google.maps.Marker({
          position,
          map,
          icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
          draggable: true
        })
        infoWindow.open({
          anchor: marker,
          map,
        }) 
      }

      //New Pin form

      let form = 
        "<h2>Create New Pin</h2>" +
          "<form>" +
            "<label>Location: </label>" +
            "<input type='text' required><br>" +
            "<br>" +
            "<label>Date Arrived: </label>" +
            "<input type='date' required><br>" +
            "<br>" +
            "<label>Date Departed: </label>" +
            "<input type='date' required><br>" +
            "<br>" +
            "<label>Companions: </label><br>" +
            "<input type='checkbox'>" +
            "<label>Mom</label><br>" +
            "<input type='checkbox'>" +
            "<label>Dad</label><br>" +
            "<input type='checkbox'>" +
            "<label>Julie</label><br>" +
            "<p style='margin-left: 13px'>+ Add Companion</p>" +
            "<label>Details: </label><br>" +
            "<textarea placeholder='What did you do there?' rows='10' cols='29'></textarea><br>" +
            "<br>" +
            "<input type='submit' value='Create Pin'>" +
            "<br>" +
          "</form>"

      //Info Window with New Pin form

      const infoWindow = new google.maps.InfoWindow({
        content: form, 
      })
    })
  }
}   
 
  
  

