const numbers = [];

let input = prompt("Enter a number or 'done' to finish");

while (input !== 'done') {
  const number = Number(input);
  numbers.push(number);
  input = prompt("Enter a number or 'done' to finish");
}

let evenNumbers = '';

for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers = evenNumbers + number + ' ';
  }
}

if (evenNumbers === '') {
  document.querySelector('#result').innerHTML = 'Even Numbers: None';
} else {
  document.querySelector('#result').innerHTML = 'Even Numbers: ' + evenNumbers;
}

document.querySelector('#end').innerHTML = 'End of program';
