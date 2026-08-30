function sortArray(numbers) {
  const sortedNumbers = [];
  for (const number of numbers) {
    sortedNumbers.push(number);
  }
  sortedNumbers.sort(function (a, b) {
    return a - b;
  });
  return sortedNumbers;
}

const numbers = [10, 5, 8, 2, 7];
console.log('Original array:', numbers);
const sortedNumbers = sortArray(numbers);
console.log('Sorted array:', sortedNumbers);
