 const _ = require('lodash');

 const numbers = [1, 2, 3, 4, 5];

// Use Lodash to get the sum of the numbers
const sum = _.sum(numbers);
console.log(sum);

// Use Lodash to get the average of the numbers
const average = _.mean(numbers);
console.log(average); 

// Use Lodash to find the maximum and minimum values in the array
const max = _.max(numbers);
const min = _.min(numbers);
console.log(max, min);

//chunk

const number=[1,2,3,4,5];
const chunk_number=_.chunk(number,2);
console.log(chunk_number);

//debounce
 function func(display){
    console.log(display);
 }
 const debounceLog=_.debounce(func,2000);
 debounceLog("I am konjoyew");
 debounceLog("I am konjoyeww");