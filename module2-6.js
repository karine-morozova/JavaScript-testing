// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array -
// массив чисел.Функция создает новый массив numbers размером в длину
// массива array и заполняет его числами из массива array умноженными на 10.
// Для перебора массива и добавления новых значений используй цикл for.
// По завершению перебора массива array возвращается массив numbers.
// function mapArray(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     //   numbers *= 10;
//     array[i] = Math.round(array[i] * 10);
//   }
//   for (let value of array) {
//     value = Math.round(value * 10);
//   }

//   return array;
// }
function mapArray(array) {
  const numbers = new Array(array.length);
  for (let i = 0; i < numbers.length; i += 1) {
    array[i] *= 10;
  }

  return array;
}

console.log(mapArray([-2, 0, 2]));
console.log(mapArray([-2.5, 0, 2.5]));
