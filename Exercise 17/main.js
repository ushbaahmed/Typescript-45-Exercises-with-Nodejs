var guestlist = ['Uzma', 'Ayesha', 'Fatime', 'Amber', 'Sana', 'Areeba'];
//print message
console.log("Unfortunately! the new dinner table won't arrive so we can invite only two guests.");
//removing guest from the list
while (guestlist.length > 2) {
    var removeGuest = guestlist.pop();
    if (removeGuest !== undefined) {
        console.log("Sorry ".concat(removeGuest, ", we can't invite you."));
    }
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited for the dinner"));
});
//Remove the last two names from your list
guestlist.splice(0, guestlist.length);
//print updated list
console.log("Updated list of guests:", guestlist);
