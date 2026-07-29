let numbers = [10,20,30,40,50];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Array element ${i+0} : ${numbers[i]}`);
}

console.log("--------------------");

let fruits = ["Mango","Orange","Apple","Banana","Pinaple"];

let i = 0;

while (i < fruits.length) {
    console.log(`Fruit ${i+0} : ${fruits[i]}`);
    i++;
}

console.log("---------------------");

let cities = ["Belagavi","Mumbai","Pune","Bangalore","Delhi"];

let j = 0;
for (let city of cities) {
    console.log(`City ${j+0} : ${city}`);
    j++;
}

console.log("---------------------");

let arr = [1,2,3,4,5,6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(`Sum of array : ${sum}`);

console.log("---------------------");

let even = [1,2,3,4,5];
for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0) {
        console.log(`Even number ${i+0} : ${even[i]}`);
    }
}
