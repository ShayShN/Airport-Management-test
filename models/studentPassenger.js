import { Passenger } from "./passengers.js"
import { RegularTicket } from "./regularTicket.js"

export class StudentPassenger extends Passenger{
    constructor(name, IDnumber, amountOfMoney, school) {
        super(name, IDnumber, amountOfMoney)
        this.school = school
    }
  
   buyTicket(ticket){
    if (this.checkamount(ticket)) {
        if (ticket instanceof RegularTicket) {
            return this.amountOfMoney -= (ticket.price*= 0.9)
        }
        else{return this.amountOfMoney -= ticket.price}
    }
    else{return false}
   }
}