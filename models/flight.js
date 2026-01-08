import { RegularTicket } from "./regularTicket.js"
import { VIPTicket } from "./VIPTicket.js"

export class Flight {
    constructor(flightName, airline, flightNumber, maximumNumberOfPassengers, regularTicketPrice, VIPTicketPrice) {
        this.flightName = flightName
        this.airline = airline
        this.flightNumber = flightNumber
        this.maximumNumberOfPassengers = maximumNumberOfPassengers
        this.regularTicketPrice = regularTicketPrice
        this.VIPTicketPrice = VIPTicketPrice
        this.ticketsList = []
        this.add = this.addTtoList()
    }
    listSize(){
        return this.maximumNumberOfPassengers
    }
     addTtoList(){
        
        for (let i = 0; i < this.maximumNumberOfPassengers * 0.9; i++) {
            this.ticketsList.push(new RegularTicket(100, ""))
            
        }
        for (let i = 0; i < this.maximumNumberOfPassengers * 0.1; i++) {
            this.ticketsList.push(new VIPTicket("", 100, "", []))
            
        }
       
        

    }
}