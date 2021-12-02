let num = 20;
let name = "Arg";
let valid = true;

let ages = [21, 24, 36, 16, 40];

ages.push(30);
console.log(ages);

for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
}

const prompt = require('prompt-sync')();

let balance = 5000;

function withdraw() {
    let amount = prompt("Withdraw amount: ");
    if (amount > 0) {
        balance -= amount;
        console.log(`Successfully withdrawn: ${amount}\nBalance: ${balance}`);
    }
}

withdraw();