import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'BeenThere';

  ngOnInit():void {
    let loader = new Loader({
      apiKey: 'AIzaSyBytbyDdTAD1-nmC-GG9KOUgRiLGoA06ZI',
      libraries: ['places']
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
      function initAutocomplete() {
        const map = new google.maps.Map(
          document.getElementById("map") as HTMLElement,
          {
            center: { lat: -33.8688, lng: 151.2195 },
            zoom: 13,
            mapTypeId: "roadmap",
          }
        );
      
        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input") as HTMLInputElement;
        const searchBox = new google.maps.places.SearchBox(input);
      
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
      
        // Bias the SearchBox results towards current map's viewport.
        map.addListener("bounds_changed", () => {
          searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
        });
      
        let markers: google.maps.Marker[] = [];
      
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
      
          if (places.length == 0) {
            return;
          }
      
          // Clear out the old markers.
          markers.forEach((marker) => {
            marker.setMap(null);
          });
          markers = [];
      
          // For each place, get the icon, name and location.
          const bounds = new google.maps.LatLngBounds();
      
          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry");
              return;
            }
      
            const icon = {
              url: place.icon as string,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25),
            };
      
            // Create a marker for each place.
            markers.push(
              new google.maps.Marker({
                map,
                icon,
                title: place.name,
                position: place.geometry.location,
              })
            );
      
            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
      
      declare global {
        interface Window {
          initAutocomplete: () => void;
        }
      }
      window.initAutocomplete = initAutocomplete;
    };

    
 
  
  

