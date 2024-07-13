//Start with your program from Exercise 14
let guests : string[] = ["Ushba", "Ayesha", "Amber"];
//a print statement stating the name of the guest who can’t make it.
let unableAttend = guests.splice(0,1);
console.log(`Unfortunately, ${unableAttend} could not make it to the dinner.`)
//Modify your list with the name of the new person you are inviting.
guests.push("Sana")
// Print a second set of invitation messages
guests.map((items) => console.log(`Dear ${items}, you are invited for dinner`)) 