// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Hello Friend";
}

var greet1 = greeting();
var greet2 = greeting();

console.log(greet1);
console.log(greet2);




// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
  return`Hi ${name}`;
}

 console.log(customGreeting("Adrian"));
 console.log(customGreeting("Toby"));


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, second, last) {
    //return `Hi ${firstName} ${middleName} ${lastName}`
    return `Hi ${first} ${second} ${last}`
}

var firstName = "Tom"
var middleName = "Badass"
var lastName = "Selleck"

console.log(greetPerson(firstName, middleName, lastName));
console.log(greetPerson("Sam", "Mark", "Smith"));











// function greetPerson(first, second, last) {
//     return 'Hi '
// }

// var name = greetPerson("Chris", "Suzy", "Norm");
// var name = greeting = greetPeson("Matt", "James", "Lucy");



// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    return number**2
}
var num1 = square(10);
var num2 = square(2);
var num3 = square(30);

console.log(num1, num2, num3);



// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(num, item) {
    
    if (num >= 4) {
      return `${item} is stocked`  
    } else if (num > 0) {
        return `${item} - running LOW`
    } else {
        return `${item} - OUT of stock!`
    }
}


console.log(checkStock(4, "Coffee"));
// => "Coffee is stocked"

console.log(checkStock(3, "Tortillas"));
// => "Tortillas - running LOW"

console.log(checkStock(0, "Cheese"));
// => "Cheese - OUT of stock!"

console.log(checkStock(1, "Salsa"));
// => "Salsa - running LOW"