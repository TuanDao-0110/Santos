'use strict';

/**
You've been provided with a function sum that returns the sum of the parameters a and b it receives.
However, in some cases, we're getting NaN. Fix this function without using if conditions (or ternary) so that we don't get NaN.
Check the sample usage to see the expected result.
**/

/**
 * @param {number} a
 * @param {number} b
 */
const sum = (a, b) => {
    // console.log(a + ' ' + typeof(b))
    if (a !== undefined && b !== undefined) return a + b;
    if (b === undefined&& a !== undefined) return a
    if (a === undefined && b === undefined) return 0
}

// Sample usage - do not modify
console.log(sum(2, 4)); // 6
console.log(sum(3, 6)); // 9
console.log(sum(3)); // 3
console.log(sum(5)); // 5
console.log(sum()); // 0
