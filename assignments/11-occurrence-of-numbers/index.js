const readlineSync = require('readline-sync');

const input = readlineSync.question('Enter the integers between 1 and 100: ');

const numbers = input.trim().split(/\s+/).map(Number);

const counts = {};
for (const number of numbers) {
  counts[number] = (counts[number] || 0) + 1;
}

const distinctNumbers = Object.keys(counts)
  .map(Number)
  .sort((a, b) => a - b);

for (const number of distinctNumbers) {
  const count = counts[number];
  console.log(`${number} occurs ${count} ${count === 1 ? 'time' : 'times'}`);
}
