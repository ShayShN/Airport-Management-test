import { Passenger } from "./passengers.js"
import { RegularTicket } from "./regularTicket.js"

export class RegularPassenger extends Passenger {
    constructor(name, IDnumber, amountOfMoney, workplace, knowsAnAirportEmployee) {
        super(name, IDnumber, amountOfMoney)
        this.workplace = workplace
        this.knowsAnAirportEmployee = knowsAnAirportEmployee
    }
    buyTicket(ticket) {
        if (this.checkamount(ticket)) {
            if (ticket instanceof RegularTicket) {
                return this.amountOfMoney -= (ticket.price *= 0.8)
            }
            else { return this.amountOfMoney -= ticket.price *= 0.85 }
        }
        else { return false }
    }

}