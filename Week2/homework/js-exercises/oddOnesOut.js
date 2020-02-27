
const myNumbers = [1, 2, 3, 4];

// create new array contian even numbers only using filter function
const newNumbers = myNumbers.filter( num => num % 2 === 0);

// log the result of execute map function on the even numbers array
console.log(newNumbers.map( num => num * 2 )); 