hello();

function hello() {
    console.log("Hello");
}


//hello2(); ReferenceError: Cannot access 'hello2' before initialization

const hello2 = function () {
    console.log("Hello");
};


hello2();