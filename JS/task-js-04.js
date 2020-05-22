const formatString = function (string) {
  const symbols = string.split('');

  if (symbols.length <= 40) {
    return string;
  } else {
    let arrayWords = [];
    for (let i = 0; i < 40; i += 1) {
      arrayWords.push(symbols[i]);
    }
    arrayWords.splice(40, 1, '...');

    return arrayWords.join('');
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
