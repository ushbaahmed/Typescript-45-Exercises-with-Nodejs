"use strict";
//More Guests
let guestlist = ["Ayesha", "Amber", "Sana"];
console.log("Great news! we found a bigger table");
guestlist.unshift("Uzma");
guestlist.splice((guestlist.length / 2), 0, "Fatime");
guestlist.push("Areeba");
guestlist.forEach(guest => (console.log(`Dear ${guest}, you are invited to dinner`)));
