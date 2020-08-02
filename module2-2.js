// // Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0)
// принимающую строку(в строке будут только слова и пробелы)
// и цену гравировки одного слова, и
// возвращающую цену гравировки всех слов в строке.

//     // Для решения этой задачи не используйте циклы.
//     Т.е.никаких for, while, do while, for of, for in, forEach
//     или функциональных методов.
const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
  message.split(" ").length * pricePerWord;
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
