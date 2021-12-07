import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchFrase: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = "blue";

  markerContent(): string {
    return `
    <div>
    <h1>Company name: ${this.companyName}</h1>
    <h3>Catchphrase name: ${this.catchFrase}</h3
    </div>
    `;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchFrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
