const readlineSync = require('readline-sync');
 
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
const min = +readlineSync.question('Enter minimum: ');
const max = +readlineSync.question('Enter maximum: ');
 
const result = generateRandomNumber(min, max);
 
console.log(`\nRandom number between ${min} and ${max}: ${result}`);