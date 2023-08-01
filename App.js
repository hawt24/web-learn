const _ = require('lodash');
// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use Lodash to get the sum of the numbers
const sum = _.sum(numbers);
console.log(sum); // Output: 15

// Use Lodash to get the average of the numbers
const average = _.mean(numbers);
console.log(average); // Output: 3

// Use Lodash to find the maximum and minimum values in the array
const max = _.max(numbers);
const min = _.min(numbers);
console.log(max, min); // Output: 5 1
