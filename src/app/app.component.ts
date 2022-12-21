import { Component, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { Loader } from '@googlemaps/js-api-loader';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'BeenThere';

  ngOnInit():void {
    let loader = new Loader({
      apiKey: 'AIzaSyBytbyDdTAD1-nmC-GG9KOUgRiLGoA06ZI'
    })

    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        streetViewControl: false,
        fullscreenControl: false,
      });

      function placeMarker(position: any, map: google.maps.Map) {
        let marker = new google.maps.Marker({
          position: position,
          map: map,
          icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
          draggable: true
        });  
        infoWindow.open({
          anchor: marker,
          map,
        });
      };

      google.maps.event.addListener(map, 'click', function(event: { latLng: any; }) {
        placeMarker(event.latLng, map);
        });

        let content = 
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
      
        let infoWindow = new google.maps.InfoWindow({
          content: content,
        })
      });
    };
  };

