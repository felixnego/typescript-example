import faker from 'faker';


export class User {

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
}