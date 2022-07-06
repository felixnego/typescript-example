import faker from 'faker';
import { Mappable } from './CustomMap';


export class User implements Mappable {

    public name: string;
    // this is not set as an object before initialization
    public location : {
        lat: number;
        lng: number;
    };

    constructor() { 
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `<h1>User Name: ${this.name}</h1>`;
    }
}