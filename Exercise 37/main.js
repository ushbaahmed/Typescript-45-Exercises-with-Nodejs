"use strict";
//Large Shirts
function make_shirt(size = "large", printMessage = "I love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} message.`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love Javascript");
