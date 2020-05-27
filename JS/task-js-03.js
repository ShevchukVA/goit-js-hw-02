const findLongestWord = function (string) {
  const arrayWords = string.split(' ');
  let biggestWord = arrayWords[0];
  for (let i = 0; i < arrayWords.length; i += 1) {
    if (arrayWords[i].length > biggestWord.length) {
      biggestWord = arrayWords[i];
    }
  }
  return biggestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
