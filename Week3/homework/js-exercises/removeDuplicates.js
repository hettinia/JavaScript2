'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// remove duplicates from the passed array 
function removeDuplicates (lettersArr) {
    
    return [...new Set(lettersArr)]; 
}

// log the result
console.log(removeDuplicates(letters));