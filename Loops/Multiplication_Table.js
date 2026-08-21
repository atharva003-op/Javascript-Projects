// (npm install prompt-sync) install this package in terminal!
const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a number to get multiplication table : "));
let b = Number(prompt("Enter range : "));

for (let i = 1; i < b+1; i++) {
    console.log(`${a} X ${i} = ${a*i}`);
}
