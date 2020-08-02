// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40)
// которая принимает строку и форматирует ее если необходимо.

// // Если длина строки не превышает maxLength,
// функция возвращает ее в исходном виде.
// // Если длина больше maxLength, то функция обрезает строку
// до размера maxLength символов и добавляет в конец строки троеточие ...,
// после чего возвращает укороченную версию.
function formatString(string, maxLength = 40) {
  const newString = string.split("");
  let message = "";
  if (newString.length <= maxLength) {
    message = string;
  } else {
    message = string.slice(0, maxLength) + "...";
  }
  return message;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
