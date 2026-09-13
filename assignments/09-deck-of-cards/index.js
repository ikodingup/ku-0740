const readlineSync = require('readline-sync');
 
const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const ranks = [
  'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King',
];
 
const cardNumber = +readlineSync.question('Enter card number: ');
 
const suit = suits[Math.floor(cardNumber / 13)];
const rank = ranks[cardNumber % 13];
 
console.log(`Card number ${cardNumber}: ${rank} of ${suit}`);
