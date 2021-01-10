// Define the numbers and the operation here
let firstNumber = prompt("Enter the first number");
let secondNumber = prompt("Enter the second number");
let operation = prompt("Enter the operation you want to perform");

// Write if-statements here

// use parseInt function to convert from str to int
if (operation === "+") {
  let result = parseInt(firstNumber) + parseInt(secondNumber);
  console.log(`The result of the operation is ${result} `);
} else if (operation === "-") {
  let result = parseInt(firstNumber) - parseInt(secondNumber);
  console.log(`The result of the operation is ${result} `);
} else if (operation === "*") {
  let result = parseInt(firstNumber) * parseInt(secondNumber);
  console.log(`The result of the operation is ${result} `);
} else if (operation === "/") {
  let result = parseInt(firstNumber) / parseInt(secondNumber);
  console.log(`The result of the operation is ${result} `);
}
