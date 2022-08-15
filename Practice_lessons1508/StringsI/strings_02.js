"use strict";

/**
Complete the function shoutMyName such that it returns the name parameter
it receives all in upper case.

Tests:returns a string
makes string uppercase

 * @param {string} name
 */
function shoutMyName(name) {
  return name[0].toUpperCase() + name.substring(1, name.length);
}

// Sample usage - do not modify
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"
