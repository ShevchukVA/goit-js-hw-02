let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число:');

  if (input !== null) {
    input = Number(input);

    if (Number.isNaN(input)) {
      alert('Было введено не число, попробуйте еще раз');
      continue;
    }
    numbers.push(input);
  }
}
if (numbers.length !== 0) {
  for (const number of numbers) {
    total += number;
  }
}
console.log(`Общая сума чисел равна: ${total}`);
