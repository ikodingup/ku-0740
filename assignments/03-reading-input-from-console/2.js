const readlineSync = require('readline-sync');
 
const miles = Number(readlineSync.question('Enter miles: '));
 
const kilometers = miles * 1.60934;
 
console.log('\n' + miles + ' miles is equal to ' + kilometers + ' kilometers');