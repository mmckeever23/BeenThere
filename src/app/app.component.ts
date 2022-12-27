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
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

// Declare Info Window

      const infowindow = new google.maps.InfoWindow({
        position: place.geometry.location,
        content: place.name,
        // "<h2>Create New Pin</h2>" +
        //   "<form>" +
        //     "<label>Location: </label>" +
        //     "<input type='text' required><br>" +
        //     "<br>" +
        //     "<label>Date Arrived: </label>" +
        //     "<input type='date' required><br>" +
        //     "<br>" +
        //     "<label>Date Departed: </label>" +
        //     "<input type='date' required><br>" +
        //     "<br>" +
        //     "<label>Companions: </label><br>" +
        //     "<input type='checkbox'>" +
        //     "<label>Mom</label><br>" +
        //     "<input type='checkbox'>" +
        //     "<label>Dad</label><br>" +
        //     "<input type='checkbox'>" +
        //     "<label>Julie</label><br>" +
        //     "<p style='margin-left: 13px'>+ Add Companion</p>" +
        //     "<label>Details: </label><br>" +
        //     "<textarea placeholder='What did you do there?' rows='10' cols='29'></textarea><br>" +
        //     "<br>" +
        //     "<input type='submit' value='Create Pin'>" +
        //     "<br>" +
        //   "</form>"
      });

// Create a marker, click handler for pre-existing markers

      const marker = new google.maps.Marker({
          map,
          icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
          title: place.name,
          position: place.geometry.location,
          animation: google.maps.Animation.DROP,
          })
          infowindow.open({
            anchor: marker,
            map,
          })
          markers.push(marker);
          map.setCenter(marker.getPosition() as google.maps.LatLng);
          marker.addListener("click", () => {
            map.setCenter(marker.getPosition() as google.maps.LatLng);
            infowindow.open({
              anchor: marker,
              map,
            })
          })
        })
      })
    })
  }
}   


 
  
  

