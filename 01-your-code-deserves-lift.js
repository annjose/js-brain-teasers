
console.log(`----- example in the book -----`);
let temp = 25;

function displayTemperature() {
  console.log(`Current temperature: ${temp}°C.`);
}

function forecastTemperature() {
    console.log(`Forecasted  temperature: ${temp}°C.`);
    var temp = 30;
}

displayTemperature();
forecastTemperature();

/**
 * My initial guess:
 *  The output will be a type error because temp variable is defined with let at the top level and
 *      then redefined with var inside the `forecastTemperature` function.
 *  Wouldn't this lift the variable to the top and cause conflict? But JavaScript does not have type errors.
 * 
 * The actual output:
 *      Current temperature: 25°C.
 *      Forecasted  temperature: undefined°C.
 * Explanation:
 *  So the `temp` variable inside `forecastTemperature` function is lifted (hoisted to the top), but when 
 *  the console.log is executed, it tries to print the local `temp` variable (instead of the global variable) 
 *  and this local temp variable does not have a value, hence it prints the value 'undefined'.
 *  This doesn't happen in the other function (`displayTemperature`) because it uses the global `temp` variable.
 *  This is a classic example of variable hoisting in JavaScript.
 */

// an example with just global variable
console.log(`----- example of global variable hoisting -----`);

console.log(`global glob1 (before initialization): ${glob1}`); // Output: global glob1: undefined
var glob1 = 333;   // var declaration
console.log(`global glob1 (after initialization): ${glob1}`); // Output: global glob1: 333

// comment the below lines to see the let example throwing ReferenceError
let glob2 = 333; // let declaration
console.log(`global glob2 (before initialization): ${glob2}`); // Output: "ReferenceError: Cannot access 'glob2' before initialization"

// another example with local variables hiding the global variables, and with both var and let
console.log(`----- example of local variable hiding global variable -----`);
var a = 10; // This is in the global scope
var b = 11; // This is in the global scope
console.log(`a in global scope = ${a}`);    // Output: a in global scope = 10

function testScope() {
    console.log(`a in function scope = ${a}`);    // Output: a in function scope = undefined
    // (because the local `a` hides global `a` and is initialized only after this line)
    var a = 20;   // This var declaration causes the above output to be "a = undefined"

    // console.log(`b = ${b}`);    // Output: "ReferenceError Cannot access 'b' before initialization"
    // because `b` is declared with let below and is in the temporal dead zone
    let b = 21;   // This let declaration results in the ReferenceError above
}
testScope();