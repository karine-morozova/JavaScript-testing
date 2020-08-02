// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""),
// которая принимает параметром произвольную
// строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.
const findLongestWord = function (string = " ") {
  let longestWord = "";
  const words = string.split(" ");
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
