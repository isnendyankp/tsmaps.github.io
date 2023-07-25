import { User } from './User';
import { Company } from './Company';
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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({})
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
