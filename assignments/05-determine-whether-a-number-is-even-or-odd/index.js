const readlineSync = require('readline-sync');
 
const number = Number(readlineSync.question('Enter a number: '));
 
const result = number % 2 === 0 ? 'even' : 'odd';
 
console.log(number + ' is ' + result);