import { nanoid } from "nanoid"


export class RegularTicket{
    constructor(price, ownerName) {
        this.randomTicketNumber = nanoid(4)
        this.price = price
        this.ownerName = ownerName
    }

}