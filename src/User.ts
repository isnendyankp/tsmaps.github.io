import faker from 'faker';
class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {}
}

// add progression :
// - create 2 property: name & location
// - this case want to randomly generate name, latitude and longtitude 
// - initialization inside of constructor function instead
// - import faker module for generating random data