const student = {
    name: "Sadman",
    age: 24,
    cgpa: 3.96
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.cgpa);

console.log(student["name"]);
console.log(student["age"]);
console.log(student["cgpa"]);

student.cgpa = 4.00;

console.log(student);