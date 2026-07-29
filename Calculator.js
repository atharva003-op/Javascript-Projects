// (npm install prompt-sync) install this package in terminal!
const prompt = require("prompt-sync")();

let choice = 0;

while (choice != 6) {
    console.log("\n--- Calculator ---");
    console.log("1.Addition");
    console.log("2.Subtraction");
    console.log("3.Multiplication");
    console.log("4.Division");
    console.log("5.Remainder");
    console.log("6.Exit");
    choice = Number(prompt("Enter choice : "));

    if (choice == 6) {
        console.log("Program exited sucessfully!");
        break;
    }

    let a = Number(prompt("Enter first number : "));
    let b = Number(prompt("Enter second number : "));

    if (choice == 1) {
        console.log(`Addition of ${a} and ${b} = ${a+b}`);
    }
    else if(choice == 2) {
        console.log(`Subtraction of ${a} and ${b} = ${a-b}`);
    }
    else if (choice == 3) {
        console.log(`Multiplication of ${a} and ${b} = ${a*b}`);
    }
    else if (choice == 4) {
        if (b != 0) {
            console.log(`Division of ${a} and ${b} = ${a/b}`);
        } else {
            console.warn("Cannot be divided by zero!")
        }
    }
    else if (choice == 5) {
        console.log(`Remainder of ${a} and ${b} = ${a%b}`);
    }

    console.log("--------------")
}
