const fruits = [
    "Apple",
    "Banana"
];

fruits.push("Orange");

console.log(fruits);

const numbers = [
    10,
    20
];

numbers.push(30);
numbers.push(40);
numbers.push(50);

console.log(numbers);

const colors = [
    "Red"
];

colors.push(
    "Green",
    "Blue",
    "Yellow"
);

console.log(colors);

const fruits = [
    "Apple",
    "Banana"
];

const length = fruits.push("Orange");

console.log(length); // Push method returns the new length of the array after adding the new element.
console.log(fruits);