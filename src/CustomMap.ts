export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
}


// step Progress:
// - cr8 base class CustomMap & export it: export class CustomMap {}
// - add property googleMap with instance of the class Google Maps map: googleMap: google.maps.Map;
// - create constructor for initialize & cr8 this map and show it on the screen: constructor() {}
// - add initialize property googleMap in constructor
// - add instance google map class
// - make class CustomMap into private access
