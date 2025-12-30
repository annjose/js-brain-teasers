const largeNumber = Math.pow(10, 16);
const smallNumber = 1;

console.log(largeNumber + smallNumber);   // Output: 1_000_000_000_000_0000 (10^16)

/**
 * My first guess is that it would be the same as large number, because JS is not good at precision?
 * 
 * Actual output: 10000000000000000, i.e. 10 to the power of 16
 * 
 * Explanation: JavaScript uses double-precision floating-point format (64-bit) as per the IEEE 754 standard.
 * This format can accurately represent integers up to 2^53 - 1 (which is 9007199254740991).
 * The lower safe integer limit is -(2^53 - 1) which is -9007199254740991.
 * Beyond this limit, JavaScript cannot represent all integers accurately due to precision loss.
 * 
 * In this case, 10^16 (10000000000000000) exceeds the safe integer limit, and adding 1 does not change the value
 * because the precision loss means that the smallest representable difference at that scale is larger than 1.
 */

const largeBigInt = BigInt(largeNumber);
const smallBigInt = BigInt(smallNumber);

console.log(largeBigInt + smallBigInt);       // Output: 10000000000000001n (10^16 + 1)

console.log(BigInt(5)); // Output: 5n
console.log(Number(5n)); // Output: 5
console.log(5 + Number(5n)); // Output: 10
console.log(BigInt(5) + 5n); // Output: 10n