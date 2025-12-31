const flag = "🇺🇸";
console.log("Length of the flag: ", flag.length);

/** 
 * My initial guess:
 * I expect the length to be 1 - it is a single character representing the flag.
 *
 * Actual output: 4
 *   because the flag is represented by a combination of multiple Unicode code points.
 *   Each code point contributes to the overall length of the string.
 */

// calculate the actual length in terms of Unicode code points
const segmenter = new Intl.Segmenter();
const segments = Array.from(segmenter.segment(flag));
console.log("Actual length of the flag: ", segments.length);

// or the following
console.log("Actual length using spread operator:", [...new Intl.Segmenter().segment(flag)].length);