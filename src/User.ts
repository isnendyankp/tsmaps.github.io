import faker from 'faker';
class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
  }
}

// add progression :
// - create 2 property: name & location
// - this case want to randomly generate name, latitude and longtitude 
// - initialization inside of constructor function instead
// - import faker module for generating random data
// - initialization name in constructor = this.name = faker.name.firstName();
// - randomly generrate a name and assign it to that name property