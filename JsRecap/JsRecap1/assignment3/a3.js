const side1 = Number(prompt('Enter first side'));
const side2 = Number(prompt('Enter second side'));
const side3 = Number(prompt('Enter third side'));

let triangle;

if (side1 === side2 && side2 === side3) {
  triangle = 'Equilateral';
} else if (side1 === side2) {
  triangle = 'Isosceles';
} else if (side1 === side3) {
  triangle = 'Isosceles';
} else if (side2 === side3) {
  triangle = 'Isosceles';
} else {
  triangle = 'Scalene';
}

document.querySelector('#result').innerHTML = 'Triangle is ' + triangle;
