const readlineSync = require('readline-sync');
 
const amount = +readlineSync.question('The amount invested: ');
const annualRate = +readlineSync.question('Annual interest rate: ');
const years = +readlineSync.question('Years to project: ');
 
const monthlyRate = annualRate / 100 / 12;
 
let value = amount;
let output = '';
 
for (let year = 1; year <= years; year++) {
  for (let month = 0; month < 12; month++) {
    value *= 1 + monthlyRate;
  }
 
  const displayValue = Math.floor(value * 100) / 100;
  output += `Year ${year}, value: ${displayValue}\n`;
}
 
console.log(`\n${output}`.trimEnd());
