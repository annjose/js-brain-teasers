let x = "\u2663";
console.log(x);

/** 
 * My initial guess: it will display some foreign language character or non-ASCII symbol.
 * 
 * Actual output:
 *   displays a black clubs symbol - correct answer!
 *   Every Unicode character is represented by a unique code point.
 *   The code point for the black clubs symbol is U+2663, 
 *   which is represented in JavaScript using the escape sequence \u2663.
 *   In JavaScript, you can see Unicode characters as identifiers (eg: variable names).
 */