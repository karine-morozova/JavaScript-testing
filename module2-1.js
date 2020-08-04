// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения(конкатенации) строк в формате ${ номер элемента } - ${ значение элемента } \n, где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления(конкатенации) строк внутри цикла for
// const getItemsString = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// console.log(getItemsString.join(","));
const getItemsString = function (array) {
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]} \n`;
  }
  return result;
};
console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
console.log(getItemsString([5, 10, 15]));
// /*
// '1 - Mango
// 2 - Poly
// 3 - Ajax
// 4 - Lux
// 5 - Jay
// 6 - Kong
// '
// */

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
// const getItemsString = function (array) {
//   let result = [];
//   let red = 0;
//   for (let i = 1; i <= array.length; i += 1) {
//     result.push(`${i} - ${array[red]}`);
//     red += 1;
//   }

//   const ger = result.join("\n");
//   return ger;
// };
// const getItemsString = function (array) {
//   let result = "";

//   for (let i = 0; i < array.length; i += 1) {
//     // console.log(array[i]);
//     // console.log(i + 1);
//     const der = `${i + 1} - ${array[i]}`;

//     result = `${result} \n ${der}`;
//   }
//   console.log(typeof result);
// };
