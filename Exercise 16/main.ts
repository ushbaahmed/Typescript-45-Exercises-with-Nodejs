//More Guests
let guestlist: string[] = ["Ayesha", "Amber", "Sana"];
//a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Great news! we found a bigger table");
// one new guest to the beginning 
guestlist.unshift("Uzma");
//one new guest to the middle
guestlist.splice((guestlist.length/2),0,"Fatima");
//one new guest to the end 
guestlist.push("Areeba")
//Print a new set of invitation messages, one for each person in your list.
guestlist.forEach(guest => (
    console.log(`Dear ${guest}, you are invited to dinner`)
))