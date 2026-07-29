// (npm install prompt-sync) install this package in terminal!
const prompt = require("prompt-sync")();

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function remainder (a,b) {
    return a % b;
}

let choice = 0;

while (choice != 6) {
    console.log("\n--- Calculator ---");
    console.log("1.Addition");
    console.log("2.Subtraction");
    console.log("3.Multiply");
    console.log("4.Division");
    console.log("5.Remainder");
    console.log("6.Exit");
    choice = Number(prompt("Enter choice : "));

    if (choice == 6) {
        console.log("Program exited sucessfully!");
        break;
    }

    if (choice > 6 || choice < 1) {
        console.error("Invalid choice!");
        continue;
    }

    let a = Number(prompt("Enter first number : "));
    let b = Number(prompt("Enter second number : "));

    switch(choice) {
        case 1:
            console.log(`Addition : ${add(a,b)}`);
            break;
        
        case 2:
            console.log(`Subtraction : ${subtract(a,b)}`);
            break;
        
        case 3:
            console.log(`Multiplication : ${multiply(a,b)}`);
            break;

        case 4:
            if (b != 0) {
                console.log(`Division : ${divide(a,b)}`);
            } else {
                console.warn("Cannot be divided with zero!");
            }
            break;

        case 5:
            console.log(`Remainder : ${remainder(a,b)}`);
            break;

        // case 6:
        //     console.log("Program exited sucessfully!");
        //     break;

        // default:
        //     console.error("Invalid choice!");
        //     break;
    }
}
