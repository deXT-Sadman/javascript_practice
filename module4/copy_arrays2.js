const numbers = [
    1,
    2,
    3
];

const copy = Array.from(numbers);

copy[2] = 100;

console.log(numbers);
console.log(copy);