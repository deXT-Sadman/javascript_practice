function greet(name, callback) {

    console.log(`Hello ${name}`);

    callback();

}

function goodbye() {
    console.log("Goodbye!");
}

greet("Sadman", goodbye);

function calculate(a, b, operation) {
    console.log(operation(a, b));
}

calculate(10, 5, function (x, y) {
    return x + y;
});

function calculate(c, d, operation) {
    console.log(operation(c, d));
}

calculate(10, 5, (x, y) => x * y);