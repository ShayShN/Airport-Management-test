import { Airport } from "./models/Airport.js";
import { StudentPassenger } from "./models/studentPassenger.js";
import { RegularPassenger } from "./models/regularPassenger.js";
import { RegularTicket } from "./models/regularTicket.js";
import { VIPTicket } from "./models/VIPTicket.js";


const airPort = new Airport()

const studentP = new StudentPassenger("shay", "208795658", 1000, "IDF")
const regularP = new RegularPassenger("David", "12345", 500, "Nasa", true)


const regularT = new RegularTicket(50, "shay")
const VIPT = new VIPTicket("1234", 100, "David", ["Free alcohol", "Free food", "Hot towels"])


regularP.buyTicket(regularT)
studentP.buyTicket(VIPT)

console.log(airPort.flights);






