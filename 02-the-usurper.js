console.log("demonstrating absence of function overloading in JavaScript");
function calculateArea(length, width) {
    return length * width;
}

function calculateArea(length) {
    return length * length;
}

console.log(`calculateArea(4, 6):\t`, calculateArea(4, 6)); // Output: 16
console.log(`calculateArea(4):\t`, calculateArea(4));       // Output: 16

/**
 * My first guess:
 *  The output will be 16 because the function `calculateArea` is redefined to take a single parameter.
 *  So that function will be called. I could be wrong though.
 * 
 * Actual output: 16. So my guess was correct. I was right!
 * 
 * Explanation:
 *  In JavaScript, when two functions are defined with the same name, the latter definition overrides the former.
 *  There is no function overloading based on parameters like in some other languages.
 */

// redefine the function to mimic function overloading
console.log("Redefining calculateArea to mimic function overloading");
function calculateArea_new(length, width) {
    if(width === undefined) {
        return length * length; // square area
    }
    return length * width; // rectangle area
}
console.log(`calculateArea_new(4, 6): `, calculateArea_new(4, 6));  // Output: 24
console.log(`calculateArea_new(4):\t`, calculateArea_new(4));        // Output: 16