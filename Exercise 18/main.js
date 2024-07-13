"use strict";
//Seeing the World
let placesToVisit = ["South Korea", "Paris", "Newyork", "Japan", "Maldives"];
// print in original order
console.log("Original order:", placesToVisit);
//print in alphabetical order
console.log("Alphabetical order:", placesToVisit.slice().sort());
// array is still in original order
console.log("Original order after sorting:", placesToVisit);
//your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order:", placesToVisit.slice().sort().reverse());
//array is still in its original order by printing it again
console.log("Original order after reverse sorting:", placesToVisit);
// Reverse the order of your list
placesToVisit.reverse();
console.log("Reverse order:", placesToVisit);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// Sort your array so it’s stored in alphabetical order
console.log("Sorted in alphabetical order:", placesToVisit.slice().sort());
//Sort to change your array so it’s stored in reverse alphabetical order.
console.log("Sorted in reverse Alphabetical order:", placesToVisit.slice().sort().reverse());
