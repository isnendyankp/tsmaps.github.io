class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {}
}

// create 2 property: name & location
// this case want to randomly generate name, latitude and longtitude 
// initialization inside of constructor function instead