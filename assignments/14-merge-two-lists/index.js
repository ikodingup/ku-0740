const readlineSync = require('readline-sync');

function parseList(input) {
  return input.trim().split(/\s+/).filter(Boolean).map(Number);
}

const list1 = parseList(readlineSync.question('Enter list1: '));
const list2 = parseList(readlineSync.question('Enter list2: '));

const merged = [...list1, ...list2].sort((a, b) => a - b);

console.log(`The merged list is ${merged.join(' ')}`);
