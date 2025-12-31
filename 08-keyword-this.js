let key = 2048;

(function (){
    console.log("Without strict mode:");
    console.log("The key is:", this.key);  // The key is: undefined
})();

/** 
 * My initial guess: it will show the value of key, which is 2048.
 *  The variable key is defined in the global scope, hence it should be accessible to the IIFE
 * 
 * Actual outcome: "The key is: undefined"
 */

// now what happens if we use 'use strict'? It throws a TypeError: Cannot read properties of undefined (reading 'key')
(function (){
    console.log("\nWith strict mode:");
    "use strict";
    console.log("The key is:", this.key);
})();

// this in the global scope returns the global object. In Node.js, the global object is 'global', 
// But in modules, 'this' at the top level is an empty object.
// In browsers, 'this' at the top level refers to the 'window' object.
console.log("\nthis in the global scope:", this);   // {}
console.log("Global this defined in ES6:", globalThis); // {}

// Example of 'this' inside an object method (person is an object)
const person = {
    firstName: "Amy",
    lastName: "Wong",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log("\nthis in object scope. Name is:", person.getFullName()); // Name is: Amy Wong

// Example of 'this' inside a constructor function
function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book1 = new Book("1984", "George Orwell");
console.log("\nthis in constructor function. Book title:", book1.title); // Book title: 1984
console.log();

// Example of 'this' in a function called with .bind() or .call() to set context
function sayHello() {
    // this refers to the object passed via bind or call
    console.log("this in binding context. Hello " + this.name, "!");
}

const user = { name: "John" };
// Call sayHello by binding 'this' to 'user' object
sayHello.bind(user)(); // Hello John!
sayHello.call(user);   // Hello John!