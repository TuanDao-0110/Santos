'use strict';

/**
Calculate the sum of the grades array and store it in a variable called sum.

/**
 *
 */
 let grades = [10, 5, 15, 20]

 // calculate the sum of these grades
const calculate = ()=> { 
 return    grades.reduce((total,recent)=> { 
       return total + recent
    },0)
}


console.log(calculate(grades))