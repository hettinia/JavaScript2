'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    // make array
    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
    numbers.filter( currentElement => {
        if (currentElement % 3 === 0) {
            threeCallback();
        }
        if (currentElement % 5 === 0) {
            fiveCallback();
        }
    });
}

// A callback that executes if the number is divisible by 3 
function sayThree() {
    console.log('sayThree');
}

// A callback that executes if the number is divisible by 3
function sayFive() {
    console.log('sayFive');
}
  
threeFive(10, 15, sayThree, sayFive);
  
  // Should create an array [10,11,12,13,14,15]
  // and call sayFive, sayThree, sayThree, sayFive