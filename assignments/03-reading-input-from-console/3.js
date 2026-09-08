const readlineSync = require('readline-sync');
 
const seconds = Number(readlineSync.question('Enter seconds: '));
 
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;
 
console.log('\n' + seconds + ' seconds is ' + minutes + ' minutes and ' + remainingSeconds + ' seconds');