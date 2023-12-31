import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

// Step progression :
// - create 2 property: name & location
// - this case want to randomly generate name, latitude and longtitude
// - initialization inside of constructor function instead
// - import faker module for generating random data
// - initialization name in constructor = this.name = faker.name.firstName();
// - randomly generate a name and assign it to that name property
// - initialization location property to be an object in constructor = this.location = {}
// - lat & lng = property object in constructor
// - randomly generate a latitude & longtitude with faker = lat: faker.address.latitude(), lng: faker.address.longtitude()
// - using parseFloat for convert string to number (lat & lng default type is number)
// - export class User = export class user to index.ts
// - fix import faker To use this library, you can install it by running: npm install @faker-js/faker
// - cr8 base markerContent method with return a string
// - add return string with format teks User Name with value property value name at object this
// - import Mappable
// - implement Mappable on class User
// - Add color property on class user(for fix trouble at index on code : customMap.addMarker(user);)
