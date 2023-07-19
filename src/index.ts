// import { User } from './User';
// import { Company } from './Company';

import { CustomMap } from './CustomMap';

const customMap = new CustomMap();

customMap.googleMap

// const user = new User();

// console.log(user);

// const company = new Company();

// console.log(company);



// step progress:
// - import class user from User.ts
// - cr8 variable equal class User with checking console.log(user);
// - import class Company from Company.ts
// -  cr8 variable equal class Company with checking console.log(company);
// - install on terminal: npm install @types/googlemaps
// - comment all code except google maps progress
// - google = global variable, maps = property, Map = class
// - cr8 an instance of a map class = new google.maps.Map();
// - cr8 an HTML element to the house map & pass a refrence to it as the first  argument
// - add document selector with id is map = new google.maps.Map(document.getElementById('map'));
// - to avoid a ts error, add "as HTMLElement" = new google.maps.Map(document.getElementById('map') as HTMLElement);
// - first argument = document.getElementById('map') as HTMLElement
// - cr8 second argument with two property in object = zoom, center with option property lat & lng
// - cr8 equal variable on instance of map class
// - remove eaual variable on instance of map class & move all instance of map class to customMaps.ts
// - import CustomMap & assign into variable
// - trying to refrence property(googleMap) = cannot access because that propety set a private