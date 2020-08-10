// Function callback

const printMessage = function (message) {
  console.log(message);
};

const higherOrderFunction = function (callback) {
  const string = "Hello World!";
  callback(string);
};
higherOrderFunction(printMessage);

const repeatLog = function (n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
};
repeatLog(5);

// Abstruction

const firstValue = function (value) {
  console.log(value);
};
const secondValue = function (value) {
  console.log("Second value: ", value);
};

const bestValue = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};
bestValue(3, firstValue);
bestValue(3, secondValue);

// Передача callback-function через стрелочную при вызове

const repeat = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};

const labels = [];
repeat(5, (value) => {
  labels.push(`Value: ${value + 1}`);
});
console.log(labels);

// Filter array

const filter = function (array, test) {
  const filteredElements = [];
  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};
const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
console.log(freshFruits);

const manyFruits = filter(fruits, (fruit) => fruit.quantity >= 120);
console.log(manyFruits);

// Lexical Environment

/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

const x = 10;
/*
  Global env
    Record: {x: 10}
    Parent: null
*/

const y = 20;
/*
  Global env
    Record: {x: 10, y: 20}
    Parent: null
*/

/*
  Записывается в момент объявления функции
  [[Environment]] = Global env
*/
const foo = function (z) {
  /*
    Foo env - создается в момент вызова функции
      Record: {z: 30}
      Parent: Global env
  */

  const x = 100;
  /*
    Foo env - создается в момент вызова функции
      Record: {z: 30, x: 100}
      Parent: Global env
  */

  return x + y + z;
};

/*
  Global env
    Record: {x: 10, y: 20, foo: <function>}
    Parent: null
*/

foo(30); // 150

// CLOSURE (замыкание)
const prepareDish = function (name) {
  /*
   * Параметр name это локальная переменная для функции prepareDish.
   * Это значит что она будет доступна функции cookingDish через замыкание.
   */

  return function cookingDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};
const readyDish = prepareDish("Mango");
readyDish("pizza");
readyDish("pasta");

const tastyDish = prepareDish("Poly");
tastyDish("soup");
tastyDish("steak");
