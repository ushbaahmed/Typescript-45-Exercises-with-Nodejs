//More Conditional Tests: 

// Tests for equality and inequality with strings
let apple = "apple";

console.log("Apple is equal to apple");
console.log(apple == apple);

console.log("Apple is not equal to apple");
console.log(apple !== apple);


//Tests using the lower case function
let uppercaseApple = "APPLE";

// Equal to
console.log("APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == apple);

//Not equal to
console.log("APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != apple);


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;

//Equal to
console.log("Ten is equal to twenty");
console.log(ten == twenty);

//not equal to
console.log("Ten is not equal to twenty");
console.log(ten != twenty);

//Greater than
console.log("twenty is greater than 10");
console.log(twenty > ten);

//less than
console.log("twenty is less than ten");
console.log(twenty < ten);

//greater than or equal to
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);

// less than or equal to
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);


//Tests using "and" and "or" operators
let five = 5;
let nine = 9;
// using and operator
console.log("nine is not equal to five and nine is greater than five");
console.log(nine != five && nine > five);

console.log("nine is not equal to five and five is greater than nine");
console.log(nine != five && five > nine);



// using or operator
console.log("nine is greater than five or nine is not equal to nine");
console.log(nine > five || nine != nine);

console.log("nine is less than five or nine is not equal to nine");
console.log(nine < five || nine != nine);


//Test whether an item is in a array
let fruits = ["apple", "orange", "banana"];
console.log("orange is include in my fruits array");
console.log(fruits.includes("orange"));

//Test whether an item is not in a array
console.log("orange is not include in my fruits array");
console.log(!fruits.includes("orange"));

















