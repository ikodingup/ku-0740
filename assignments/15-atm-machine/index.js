const readlineSync = require('readline-sync');

const accounts = Array.from({ length: 10 }, (_, id) => ({ id, balance: 100 }));

function promptForAccount() {
  while (true) {
    const input = readlineSync.question('Enter an id: ').trim();

    if (/^\d+$/.test(input)) {
      const account = accounts.find((account) => account.id === Number(input));
      if (account) {
        return account;
      }
    }
  }
}

function showMenu() {
  console.log('\nMain menu');
  console.log('1: check balance');
  console.log('2: withdraw');
  console.log('3: deposit');
  console.log('4: exit');
}

function readAmount(prompt) {
  const input = readlineSync.question(prompt).trim();
  const amount = Number(input);

  return input !== '' && Number.isFinite(amount) && amount > 0 ? amount : null;
}

function runSession(account) {
  while (true) {
    showMenu();
    const choice = readlineSync.question('Enter a choice: ').trim();

    if (choice === '1') {
      console.log(`The balance is ${account.balance.toFixed(1)}`);
    } else if (choice === '2') {
      const amount = readAmount('Enter an amount to withdraw: ');
      if (amount !== null && amount <= account.balance) {
        account.balance -= amount;
      }
    } else if (choice === '3') {
      const amount = readAmount('Enter an amount to deposit: ');
      if (amount !== null) {
        account.balance += amount;
      }
    } else if (choice === '4') {
      return;
    }
  }
}

let isFirstPrompt = true;

while (true) {
  if (!isFirstPrompt) {
    console.log('');
  }
  isFirstPrompt = false;

  runSession(promptForAccount());
}
