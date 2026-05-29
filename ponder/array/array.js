// 1. Javascript Arrays
//             0         1        2
let names = ["olive", "rose", "lily"];
console.log(names);

console.log(names[0]);
console.log(names[1]);
console.log(names[names.length - 1]);

let ages = [20, 23, 40];

let mixarrays = ["olive", 20, "rose", 23, "lily", 40];
console.log(mixarrays);

// 2. Javascript o1bjects
let studentName = "Olive";
let studentClass = "WDD131";

// Literal Objects
let student = {
    // Key : Value
    name: "Bob",
    class: "WDD131",
    grade: "A",
    age: 27,
}

console.log(student);
console.log(student.class);

// 3. Array Methods
names.forEach((name) => {
    // this code executes once per each item in the array
    console.log(name);
})

// Map function returns a NEW array with values returned from the function
let newNameArray = names.map((name) => {
    return name + " Warner";
})
console.log(newNameArray);

// Filter function returns a new array with filtered values
let filteredArrays = names.filter((name) => {
    // Filter returns boolean. True keep, false dont't keep
    return name.includes("e");
})
console.log(filteredArrays);

const numbers = [175, 50, 25];
const total = numbers.reduce((acumulator, number) => acumulator - number);
console.log(total);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
console.log(index);

const name = "Efrain";
const age = 20;

const greeting = `Hi, my name is ${name} and I am ${age} years old.`;

console.log(greeting);