const numbers = [
    10,
    20,
    30
];

const copy = [...numbers];

copy[0] = 999;

console.log(numbers);
console.log(copy);