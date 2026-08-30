const number = Number(prompt('Enter a positive integer'));
let table = '<table>';
for (let i = 1; i <= number; i = i + 1) {
  let row = '<tr>';
  for (let j = 1; j <= number; j = j + 1) {
    const product = i * j;
    let cell = '<td>';
    cell = cell + product;
    cell = cell + '</td>';
    row = row + cell;
  }
  row = row + '</tr>';

  table = table + row;
}
table = table + '</table>';

document.querySelector('#result').innerHTML = table;
