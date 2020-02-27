const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

// Use the filter array function to take out the lemons
const newFruitBasket = fruitBasket.filter( fruit => fruit !== 'Lemon' );

// Output the new fruit basket
console.log('My mom bought me a fruit basket, containing ' + newFruitBasket);