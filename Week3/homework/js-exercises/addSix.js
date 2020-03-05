'use strict';

function createBase(baseNumber) {
    return (closureNum) => { return baseNumber + closureNum; }
}
  
const addSix = createBase(6);
  
// Three calls of function ...
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));