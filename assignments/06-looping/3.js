const readlineSync = require('readline-sync');
 
const size = Number(readlineSync.question('Enter size: '));
 
for (let row = size; row >= 1; row--) {
  let line = '';
  for (let col = 0; col < row; col++) {
    line += '*';
  }
  console.log(line);
}
 