const x1 = Number(prompt('Enter x coordinate for first point'));
const y1 = Number(prompt('Enter y coordinate for first point'));
const x2 = Number(prompt('Enter x coordinate for second point'));
const y2 = Number(prompt('Enter y coordinate for second point'));

const xDifference = x2 - x1;
const yDifference = y2 - y1;

const xSquared = xDifference * xDifference;
const ySquared = yDifference * yDifference;

const total = xSquared + ySquared;

const distance = Math.sqrt(total);

document.querySelector('#result').innerHTML =
  'Distance between two point: ' + distance;
