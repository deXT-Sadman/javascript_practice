function calculator(operation) {

    return operation(10, 20);

}

const answer = calculator((a, b) => a + b);

console.log(answer);