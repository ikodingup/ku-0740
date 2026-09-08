const readlineSync = require('readline-sync');
 
const size = Number(readlineSync.question('Enter size: '));
 
console.log();
 
for (let row = 0; row < size; row++) {
  let line = '';
  for (let col = 0; col < size; col++) {
    line += '*';
  }
  console.log(line);
}