const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits are');
console.log(fruits);

const fruitLength = fruits.length;
console.log('Number of fruits');
console.log(fruitLength);

const thirdFruit = fruits[2];
console.log('Fruit at index 2');
console.log(thirdFruit);

const lastIndex = fruits.length - 1;
const lastFruit = fruits[lastIndex];

console.log('Last fruit');
console.log(lastFruit);

const vegetables = [];

const firstVegetable = prompt('Enter first vegetable');
vegetables.push(firstVegetable);

const secondVegetable = prompt('Enter second vegetable');
vegetables.push(secondVegetable);

const thirdVegetable = prompt('Enter third vegetable');
vegetables.push(thirdVegetable);

console.log('Vegetables are');
console.log(vegetables);

const vegetableLength = vegetables.length;

console.log('Number of vegetables');
console.log(vegetableLength);
