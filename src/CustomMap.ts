/// <reference types="@types/google.maps" />
// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there!',
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

// step Progress:
// - cr8 base class CustomMap & export it: export class CustomMap {}
// - add property googleMap with instance of the class Google Maps map: googleMap: google.maps.Map;
// - create constructor for initialize & cr8 this map and show it on the screen: constructor() {}
// - add initialize property googleMap in constructor
// - add instance google map class
// - make class CustomMap into private access
// - pass parameter in the id as an argument to constructor = divId: string
// - cr8 2 base method: addUserMarker & addCompanyMarker
// - import User & Company
// - add paramter for each method
// - add void return for each method
// - add a marker on the screen  with : new google.maps.Marker
// - add property inside object marker
// - add googlemap marker on addCompanyMarker
// - add option object with property map
// - add option object with property position
// - cr8 generic method
// - cr8 generic method with parameter mappable and have 2 option class user and company
// - add mappale on property position
// - cr8 interface base Mappable
// - add property lat & lng on interface Mappable
// - change class on addMarker method to interface Mappable with parameter mappable (for solution Restricting access with interfaces)
// - remove junk code & sign marker to variable
// - add base event listener to the marker
// - sign infoWindow for pass option object with content inside
// - connecting infoWindow to googleMap marker
// - add property on interface Mappable
