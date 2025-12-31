!function() {
    const name = "John";
    const age = 25;
}();

// const capitalizedName = name[0].toUpperCase() + name.slice(1);
// console.log('Capitalized Name:', capitalizedName);

/** 
 * My initial guess; I was surprised that the code wouldn't compile without the leading `!` symbol to the function.
 *   So I added the ! and tried again. Now my guess is that it will show 'John' as the capitalized name.
 * 
 * Actual output:
 * However, when I run the code, I get a ReferenceError: name is not defined.
 * This is because the variable `name` is scoped to the immediately invoked function expression (IIFE)
 * and is not accessible outside of it. Therefore, when we try to access `name` outside the function,
 * it results in an error.
 * 
 * To fix this, we would need to declare `name` in a scope that is accessible where we want to use it.
 */

/** 
 * Calling the IIFE function with a leading ! is called a Unary Operator Enclosure.
 * This is a common pattern in JavaScript to create a new scope and avoid polluting the global namespace.
 * The leading `!` operator forces the function to be treated as an expression, allowing it to be invoked immediately.
 * 
 * You can get the same result by wrapping the function in parentheses like this:
*/

(function() {
    const name = "John";
    const age = 25;
})();

// const capitalizedName = name[0].toUpperCase() + name.slice(1);
// console.log('Capitalized Name:', capitalizedName);

/** Another way to call IIFE is Grouping Operator Enclosure by putting outer parentheses around the IIFE */

(function() {
    const name = "John";
    const age = 25;
}());

const capitalizedName = name[0].toUpperCase() + name.slice(1);
console.log('Capitalized Name:', capitalizedName);
