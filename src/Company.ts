import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    };
}


// Step progress:
// - cr8 file with import & cr8 base for export class Company 
// - cr8 3 property: companyName, catchPhrase and location with type
// - define constructor function for initialize all properties
// - initialize property companyName  for value from faker.company.name() which is companyName came from randomly generated using faker library. 
// - initialize property companyPhrase fo generate catchy phrases or slogans which are also generated randomly using the faker library and are generally used to represent a company in a nutshell.