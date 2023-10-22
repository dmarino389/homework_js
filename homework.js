//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function displayFavoriteFoods(person) {
    Object.keys(person).forEach(key => {
        if (typeof person[key] === 'string') {
            console.log(`${key}: ${person[key]}`);
        } else if (Array.isArray(person[key])) {
            console.log(`${key}: ${person[key].join(", ")}`);
        } else if (typeof person[key] === 'object') {
            Object.keys(person[key]).forEach(subKey => {
                console.log(`${subKey}: ${person[key][subKey]}`);
            });
        }
    });
}


displayFavoriteFoods(person3);



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Arrow functions are not ideally suited for object methods where you're relying on 'this'
    // However, for the purpose of this exercise, we'll use arrow functions as instructed.
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    this.addAge = (years) => {
        this.age += years;
    };
}

// Creating two new people
let person1 = new Person('Alice', 30);
let person2 = new Person('Bob', 25);

// Printing their info
person1.printInfo();
person2.printInfo();

// Incrementing person1's age by 3 years
person1.addAge(3);
person1.printInfo();  // should display age as 33 now.








// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else if (str.length <= 10) {
            resolve("Small number");
        } else {
            reject("Invalid type");
        }
    });
}

checkStringLength("Hello World")  // Example of a string with length greater than 10
    .then(message => {
        console.log(message);  // Should log "Big word"
    })
    .catch(error => {
        console.log(error);
    });

checkStringLength("Hello")  // Example of a string with length less than 10
    .then(message => {
        console.log(message);  // Should log "Small number"
    })
    .catch(error => {
        console.log(error);
    });
