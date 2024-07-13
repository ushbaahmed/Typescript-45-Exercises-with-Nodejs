"use strict";
//Sandwiches
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(ingredients => console.log(ingredients));
    console.log("\nNow enjoy sandwich");
}
makeSandwich("Bread", "Butter");
makeSandwich("Chicken", "Cheese", "Egg");
makeSandwich("Bread", "Butter", "Chicken", "Tomato", "Cheese", "Egg", "Mayo");
