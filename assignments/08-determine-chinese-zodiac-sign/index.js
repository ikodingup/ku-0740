const readlineSync = require('readline-sync');

const zodiacSigns = [
    'monkey',
    'rooster',
    'dog',
    'pig',
    'rat',
    'ox',
    'tiger',
    'rabbit',
    'dragon',
    'snake',
    'horse',
    'sheep',
];

const year = readlineSync.question('Enter a year: ');

const zodiac = zodiacSigns[year % 12];

console.log(`\nThe Chinese zodiac for year ${year} is ${zodiac}`);
