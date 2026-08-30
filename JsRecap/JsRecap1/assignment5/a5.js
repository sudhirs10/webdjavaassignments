const number = Number(prompt('Enter a positive integer'));
let sum = 0;
let i;
for (i = 1; i <= number; i = i + 1) {
  sum = sum + i;
}

document.querySelector('#result').innerHTML = 'The sum is ' + sum;
