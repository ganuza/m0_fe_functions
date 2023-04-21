// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?");  // moved this code block down from line above, added a semicolon
}  // moved this ending curly brace down from line above

askForName();


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;  // indented the code block, added semicolon
  return sum;  // indented this line of code block
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
function makeFreshPesto() {  //wrote out function instead of func
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");  
}  //moved end curly brace down here from line above

makeFreshPesto();


//  EX 4:
function average(num1, num2) {  // moved opening curly brace up from line below
  var sum = num1 + num2;  // indented code block
  var avg = sum / 2;  // moved line back inline with code block above
  return avg;  // took out blank line
}  // moved ending curly brace to beginning of line