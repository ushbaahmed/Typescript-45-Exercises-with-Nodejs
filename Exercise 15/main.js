var guests = ["Ushba", "Ayesha", "Amber"];
var unableAttend = guests.splice(0, 1);
console.log("Unfortunately, ".concat(unableAttend, " could not make it to the dinner."));
guests.push("Sana");
guests.map(function (items) { return console.log("Dear ".concat(items, ", you are invited for dinner"));});
