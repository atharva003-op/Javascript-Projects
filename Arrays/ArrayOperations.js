// (npm install prompt-sync) install this package in terminal!
const prompt = require("prompt-sync")();

choice = 0;
arr = [];

do {
    console.log("--- |Array Operations| ---");
    console.log("[1].Insert at beginning");
    console.log("[2].Insert at ending");
    console.log("[3].Delete from beginning");
    console.log("[4].Delete from ending");
    console.log("[5].Display Array");
    console.log("[6].Find length of Array");
    console.log("[7].Exit")
    choice = Number(prompt("Enter choice (1 - 7) : "));

    if (choice > 7 || choice <= 0) {
        console.error("Invalid choice!\n");
        continue;
    }

    if (choice == 7) {
        exit = prompt("Do you want to exit? (y/n) : ");
        if (exit == 'y' || exit == 'Y') {
            console.log("Program Exited Sucessfully!");
            break;
        } else {
            choice = 0;
            console.log("\n")
        }
    }

    if (choice == 1) {
        let  n = Number(prompt("Enter an element : "));
        arr.unshift(n);
        console.log("Element inserted!\n");
    } 
    else if (choice == 2) {
        let  n = Number(prompt("Enter an element : "));
        arr.push(n);
        console.log("Element inserted!\n");
    }
    else if (choice == 3) {
        if (arr.length == 0) {
            console.log("Array is empty!\n");
        } else {
            arr.shift();
            console.log("Element deleted!\n");
        }
    }
    else if (choice == 4) {
        if (arr.length == 0) {
            console.log("Array is empty!\n");
        } else {
            arr.pop();
            console.log("Element deleted!\n");
        }
    }
    else if (choice == 5) {
        if (arr.length == 0) {
            console.log("Array is empty!\n");
        } else {
            console.log("Array : ");
            console.log(arr);
            console.log("\n");
        }
    }
    else if (choice == 6) {
        console.log(`Array length : ${arr.length}\n`);
    }

} while (choice != 7);
