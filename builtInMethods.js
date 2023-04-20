// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


// The includes() method is called on the string "Hello World"
// This method is asking if the string "Hello World" includes the argument
// The argument "Hello" is passed
// The return value is true
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World"
// This method is asking if the string "Hello World" ends with the argument given
// The argument "Hello" is passed
// The return is false
"Hello World".endsWith("Hello");

// The endsWith method is called on the string "Hello World"
// This medhod is asking if the string "Hello World" ends with the argument given
// The argument "rld" is passed
// The return is true
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The repeat method is called on the animal variable, which stores an object "Tiger".
// The argument 3 is passed
// In this example, the return value is TigerTigerTiger
// The console.log() statement prints the return value of repeat() method (TigerTigerTiger) to the console

// The concat method is called on the beer variable, which stores a string "Pilsner"
// The argument " is the best" is passed
// In this example, the return value is Pilsner is the best
// The console.log() statement prints the return value of concat() method (Pilsner is the best) to the console
var animal = "Tiger";
var beer = "Pilsner";

console.log(animal.repeat(3));
console.log(beer.concat(" is the best"));




// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var age = [10, 13, 18];
var children = ["Tim", "Liz", "Sue"];


// The join method is called on the children variable that stores the array above
// no argument is passed
// In this example the return value is Tim,Liz,Sue
// The console.log() statement prints the return value of the join() method (Tim,Liz,Sue) to the console
console.log(children.join());

//  The reverse method is called on the age variable that stores the array
// no argument is passed
// In this example the return value is [18, 13, 10]
// The console.log() statement prints the return value of the reverse() method [18, 13, 10] to the console
console.log(age.reverse());
