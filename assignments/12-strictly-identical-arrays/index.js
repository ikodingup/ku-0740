const readlineSync = require('readline-sync');

function equals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function parseList(input) {
  return input.trim().split(/\s+/).filter(Boolean).map(Number);
}

const list1 = parseList(readlineSync.question('Enter list1: '));
const list2 = parseList(readlineSync.question('Enter list2: '));

if (equals(list1, list2)) {
  console.log('Two lists are strictly identical');
} else {
  console.log('Two lists are not strictly identical');
}
