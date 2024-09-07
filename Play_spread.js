// ... Spread Operator and Rest Parameters 
// ? What is spread operator?
// The spread operator is a nes addition to the set of operators is Javascripts ES6. It makes in an iterable (e.g an array) and expands it individual Elements. The spread operator is used to copy an array, merge arrays, add elements to an array, and add properties to an object.

// Example 1
// Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1,2,3]

//Example 2
//Merging arrays
const ex2_arr1 = [1,2,3];
const ex2_arr2 = [4,5,6];
const ex2_arr3 = [... ex2_arr1, ... ex2_arr2]


console. log(ex2_arr3) // [1, 2, 3, 4, 5, 6]

// example 3
// adding elements to an array

const ex3_arr1 = [1, 2, 3];
const ex3_arr2 = [...ex_arr1, 4, 5 , 6]

console.log(ex3_arr2) // [1, 2, 3, 4, 5, 6]

// the spread operator is not only used for array, it can also be used for objects.
// example 4
// copying an object

const obj1 = {name: "John", age: 25};
const obj2 = { ...obj1};

console.log(obj2) // {name: "John", age: 25}

// Example 5
// Merging objects
const obj3 = {name: "John", age: 25};
const obj4 = {city: "New York", country: "USA"};

const obj5 = { ...obj3, ...obj4};

console.log(obj5); // { name: 'John', age: 25, city: 'New York' country; 'USA'}

//Example 6
// Adding properties to an object
const obj6 = { name: 'John', age: 25 };
const obj7 = {...obj6, city:  'New York', country: 'USA'};

console.log(obj7); // f name: 'John', age: 25, city: 'New York', country: 'USA' }

// Example 7
// Overriding properties
const obj8 = { name: 'john', age: 25};
const obj9 = {...obj8, age: 30 };

// ! Rest Parameters
// Rest Parameters are used to present and indefinite number of arguments as an array. It allows you to pass an arbitrary number of arguments to a function.

 // Example 8
 function sum(...args) {
    return args;
 }

console.log(sum(1,2,3,4,5)); // [1,2,3,4,5]
