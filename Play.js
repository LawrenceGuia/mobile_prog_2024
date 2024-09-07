// 1. DECLARING AND ASSIGNMENT OF VARIABLES

let userName = "Lawrence"; 
let userAge = 20; // Changed age value
let enjoysActivities = false; // Changed hasHobbies to enjoysActivities

const immutableName = "Lawrence"; 

// * CONDITIONAL STATEMENTS
if (enjoysActivities) { // if enjoysActivities is true
    console.log("I enjoy activities.");
} else {
    console.log("I do not enjoy activities.");
}

if (userAge > 19) {
    console.log("You are older than 19.");
} else if (userAge < 19) {
    console.log("You are younger than 19.");
} else {
    console.log("You are 19 years old.");
}

switch (userName) {
    case "Ella":
        console.log("You are Lawrence");
        break;
    default:
        console.log("You are not Lawrence.");
}

// 2. PRINTING TO THE CONSOLE

console.log(userName);
console.log(userAge);
console.log(enjoysActivities);

console.log(immutableName);

console.log(`My name is ${userName} and I am ${userAge} years old.`); 

// 3. ARRAY DECLARATION

let activities = ["Reading", "Hiking"]; // Changed hobbies to activities


console.log(activities); // Output: ["Reading", "Hiking"]

console.log(activities[0]); // Output: Reading

for (let activity of activities) {
    console.log(activity);
}

// Adding an element to the array
activities.push("Traveling");

console.log(activities); // Output: ["Reading", "Hiking", "Traveling"]

// MAPPING AN ARRAY
activities = activities.map((activity) => {
    return activity + " is enjoyable"; // Changed the output string
});

console.log(activities); // Output: ["Reading is enjoyable", "Hiking is enjoyable", "Traveling is enjoyable"]

// 4. OBJECT DECLARATION

let individual = {
    userName: "Lawrence", // Changed person to individual
    userAge: 19,
    enjoysActivities: false,
    greet() {
        console.log("Hi, I am " + this.userName); // Changed greeting
    }
};


console.log(individual.userName); // Output: Lawrence
console.log(individual.userAge); // Output: 19
console.log(individual.enjoysActivities); // Output: false


individual.greet(); // Output: Hi, I am Lawrence

// 5. FUNCTION DECLARATION

// Regular function declaration
function greetUser() {
    console.log("Hi there!"); // Changed greeting
}

// Calling the function
greetUser(); // Output: Hi there!

// Arrow function declaration
const greetArrow = () => {
    return "Hello there!"; // Changed return value
};

// Calling the arrow function
console.log(greetArrow()); // Output: Hello there!

// Adding parameters/arguments to functions
function introducePerson(userName, userAge) {
    console.log("This person is " + userName + " and is " + userAge + " years old");
}

introducePerson(userName, userAge); // Output: This person is Lawrence and is 19 years old

// Another way to write a function using an arrow function
const introducePersonArrow = (userName, userAge) => {
    return `This person is ${userName} and is ${userAge} years old`; // Fixed string interpolation
};

console.log(introducePersonArrow(userName, userAge)); // Output: This person is Lawrence and is 19 years old
