// Creating an array of 10 integers
const numbers = [5, 8, 12, 20, 15, 10, 3, 9, 14, 7];

// Printing one by one
console.log("Array values:");
numbers.forEach((number, index) => {
  console.log(`Number ${index + 1}: ${number}`);
});

// Calculating the average
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / numbers.length;

// Printing the average
console.log(`Average: ${average}`);
