let name = "Sadman";

console.log(name);

let age = 24;

console.log(age);

age = 25;

console.log(age);

const country = "Bangladesh";

console.log(country);

const country = "Bangladesh";

//country = "Japan";   TypeError: Assignment to constant variable.

var x = 10;

var x = 20;

console.log(x); //var is function-scoped and can be redeclared, which can cause bugs. Prefer let and const in modern JavaScript.