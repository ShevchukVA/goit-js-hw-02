let input;
const numbers = [];
let total = 0;

const summ = function (args) {
  for (const arg of args) {
    total += arg;
  }
  return total;
};

while (input !== null) {
  input = prompt('Введите число:');

  if (input === null) {
    summ(numbers);
    break;
  }
  input = Number(input);

  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(input);
}

console.log(`Общая сума чисел равна: ${total}`);
