function getInfo() {
    return ["John Doe", 30, "New York"];
}

let [name, age, city] = getInfo();
console.log(`name: ${name}, age: ${age}, city: ${city}`);

function getStudentInfo() {
    return {
        name: "Alice",
        age: 22,
        city: "Los Angeles"
    };
}

let student = getStudentInfo();
console.log(`name: ${student.name}, age: ${student.age}, city: ${student.city}`);