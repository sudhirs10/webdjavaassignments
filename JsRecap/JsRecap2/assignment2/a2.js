const numbers = [];

const number1 = Number(prompt('Enter first number'));
numbers.push(number1);

const number2 = Number(prompt('Enter second number'));
numbers.push(number2);
const number3 = Number(prompt('Enter third number'));
numbers.push(number3);
const number4 = Number(prompt('Enter fourth number'));
numbers.push(number4);
const number5 = Number(prompt('Enter fifth number'));
numbers.push(number5);
console.log('Numbers:', numbers);
const searchNumber = Number(prompt('Enter number to search'));

if (numbers.includes(searchNumber)) {
  console.log('Number ' + searchNumber + ' is found');
} else {
  console.log('Number ' + searchNumber + ' is not found');
}

numbers.pop();
console.log('Updated numbers:', numbers);

numbers.sort(function (a, b) {
  return a - b;
});
console.log('Sorted numbers:', numbers);
