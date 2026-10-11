const readlineSync = require('readline-sync');

function parseNumbers(line) {
  return line.trim().split(/\s+/).filter(Boolean).map(Number);
}

const [rows, columns] = parseNumbers(
  readlineSync.question('Enter the number of rows and columns in the array: ')
);

console.log('Enter the array:');

const table = [];
for (let row = 0; row < rows; row++) {
  table.push(parseNumbers(readlineSync.question('')));
}

let largest = table[0][0];
let largestRow = 0;
let largestColumn = 0;

for (let row = 0; row < rows; row++) {
  for (let column = 0; column < columns; column++) {
    if (table[row][column] > largest) {
      largest = table[row][column];
      largestRow = row;
      largestColumn = column;
    }
  }
}

console.log(
  `The location of the largest element is ${largest} at (${largestRow}, ${largestColumn})`
);
