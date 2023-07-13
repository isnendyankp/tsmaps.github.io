import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
}


// step progress:
// cr8 file with import & cr8 base for export class Company 
//  cr8 3 property: companyName, catchPhrase and location with type