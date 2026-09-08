const readlineSync = require('readline-sync');
 
const first = Number(readlineSync.question('Enter first number: '));
const second = Number(readlineSync.question('Enter second number: '));
 
const userAnswer = Number(readlineSync.question('What is ' + first + ' + ' + second + '? '));
 
const actualSum = first + second;
const isCorrect = userAnswer === actualSum;
 
console.log(first + ' + ' + second + ' = ' + userAnswer + ' is ' + isCorrect);