import test from "node:test"
import assert from "node:assert"
import { StudentPassenger } from "./models/studentPassenger.js";
import { RegularTicket } from "./models/regularTicket.js";



const studentP = new StudentPassenger("shay", "208795658", 1111, "IDF")
const regularT = new RegularTicket(50, "shay")


test.describe("Ticket Purchase", ()=>{
    
    test("Not enough money", ()=>{
        
        assert.deepStrictEqual(studentP.buyTicket(regularT), true)
    })
    test("Enough money", ()=>{
        assert.deepStrictEqual(studentP.name , "shay")
        assert.deepStrictEqual(regularT.ownerName , "shay")
    })
})