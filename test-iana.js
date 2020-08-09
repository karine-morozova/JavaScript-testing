// function formatString(string, maxLength = 40) {
//   console.log(string.length);
//   if (string.length <= maxLength) {
//     console.log(string);
//   } else {
//     const newString = string.slice(0, maxLength);

//     console.log(newString + "...");
//   }
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'
// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// // 'Vestibulum facilisis, purus ne...'
// function checkForSpam(message) {
//   const messageToLowerCase = message.toLowerCase();
//   if (
//     messageToLowerCase.includes("spam") ||
//     messageToLowerCase.includes("sale")
//   ) {
//     return true;
//   }
//   return false;
// }
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// function mapArray(array) {
//   const numbers = new Array(array.length);

//   for (let i = 0; i < array.length; i += 1) {
//     numbers.push(array[i] * 10);
//   }
//   numbers.splice(0, array.length);

//   return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
// //  [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]
// function reduceArray(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }

//   return total;
// }
// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5
const findBestEmployee = function (employees) {
  const allEmployees = Object.entries(employees);
  let bestValue = 0;
  let bestEmployee = "";
  console.log(allEmployees);
  for (const employee of allEmployees) {
    if (employee[1] > bestValue) {
      bestValue = employee[1];
      bestEmployee = employee[0];
    }
    // console.log(employee[1]);
    // console.log(employee[0]);
  }

  console.log(bestEmployee);
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

function getAllPropValues(array, prop) {
  const propValues = [];
  for (const element of array) {
    if (prop in element) {
      propValues.push(element[prop]);
    }
  }
  console.log(propValues);
  // if (prop in array) {
  //   console.log(prop);
  // }
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity"));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, "category"));
//  []
