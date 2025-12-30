const arr_1 = ["amy", "elsa", "bob"];
const arr_2 = ["carol", "dave", "frank"];

const combined_plusop = arr_1 + arr_2;
console.log(combined_plusop);   // "amy,elsa,bobcarol,dave,frank

/**
 * My initial guess:
 *  It would concatenate the two arrays into one array. so it would be:
 *  ["amy", "elsa", "bob", "carol", "dave", "frank"]
 * 
 * Actual output:
 *   "amy,elsa,bobcarol,dave,frank"  as a single string separated by commas, all except between "bob" and "carol"
 * 
 * Explanation:
 * In JavaScript, the + operator when used with arrays, converts the array elements to strings first,
 *  then convert each array into a comma-separated string, and then concatenate those two strings together.
 *  So ""amy,elsa,bob" + "carol,dave,frank" results in "amy,elsa,bobcarol,dave,frank".
 */

const num_arr_1 = [1, 5, 9];
const num_arr_2 = [10, 11, 12];

const combined_num_plusop = num_arr_1 + num_arr_2;
console.log(combined_num_plusop);   // "1,5,910,11,12"

/* A better solution to concatenate arrays would be to use the concat() method or the spread operator: */
const combined_concat = arr_1.concat(arr_2);
console.log(combined_concat);   // ["amy", "elsa", "bob", "carol", "dave", "frank"]

const combined_spread = [...arr_1, ...arr_2];
console.log(combined_spread);   // ["amy", "elsa", "bob", "carol", "dave", "frank"]

/* You can also use push and unhift methods to concatenate arrays in place: 
    push appends the second array to the end of the first array
    unshift adds the elements of the second array to the beginning of the first array
*/
// clone arr_1 to avoid modifying the original
const arr_1_push = [...num_arr_1];
arr_1_push.push(...num_arr_2);
console.log(arr_1_push);   // [1, 5, 9, 10, 11, 12]

// clone arr_1 to avoid modifying the original
const arr_1_unshift = [...num_arr_1];
arr_1_unshift.unshift(...num_arr_2);
console.log(arr_1_unshift);   // [10, 11, 12, 1, 5, 9]