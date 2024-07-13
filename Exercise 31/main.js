"use strict";
//No User
let userNames = ["Ali", "Ayesha", "Admin", "Ushba", "Syeda"];
userNames = [];
// checking if the array is empty or not
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else
    (userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    }));
