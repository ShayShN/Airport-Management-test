export class Passenger {
    constructor(name, IDnumber, amountOfMoney) {
        this.name = name
        this.IDnumber = IDnumber
        this.amountOfMoney = amountOfMoney
    }
    checkamount(ticket) {
        return this.amountOfMoney > ticket.price
    }
}