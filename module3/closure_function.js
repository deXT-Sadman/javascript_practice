function counter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

const increment = counter();

increment();
increment();
increment();

function makeGreeting(message) {

    return function (name) {

        console.log(`${message}, ${name}!`);

    };

}

const welcome = makeGreeting("Welcome");

welcome("Sadman");
welcome("John");