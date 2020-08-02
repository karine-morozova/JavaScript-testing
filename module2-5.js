// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message),
// принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли запрещенное слово то функция возвращает true,
//     если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.
const checkForSpam = function (str) {
  const string = str.toLowerCase();

  return string.includes("spam") || string.includes("sale");
};
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
console.log(checkForSpam("JavaScript weekly newsletter"));
