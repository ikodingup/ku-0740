const readlineSync = require('readline-sync');
 
const first = Number(readlineSync.question('Enter first number: '));
const second = Number(readlineSync.question('Enter second number: '));
const third = Number(readlineSync.question('Enter third number: '));
 
const average = (first + second + third) / 3;
 
console.log('\nThe average of ' + first + ', ' + second + ', ' + third + ' is ' + average);