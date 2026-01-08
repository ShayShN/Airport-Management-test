import { Flight } from "./flight.js";


export class Airport {
    constructor() {
        this.flights = []
        this.adding = this.flights.push(new Flight("ElAl", "Delta", "777", 100, 50, 100, []), new Flight("WizAir", "AirForce", "888", 200, 50, 100, []), new Flight("AirHaifa", "Boing", "999", 300, 50, 100, []))
        
    }

    addFlight(flight){
        this.flights.push(flight)
    }
   
}

