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

// THIS

const kari = {
  name: "Kari",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.name);
  },
};
kari.showThis();
kari.showName();

function globalFunction() {
  console.log("this in showThis: ", this);
}
// Вызываем в глобальном контексте
globalFunction();

const iana = { name: "mango" };
// Записываем ссылку на функцию в свойство объекта
// Обратите внимание, что это не вызов - нет()

iana.showContext = globalFunction;
iana.showContext();

// This в function callback
const hotel = {
  name: "Mango",
  showThis() {
    console.log(this);
  },
};

const fn = function (callback) {
  callback();
};
fn(hotel.showThis);

// This в стрелочной function

const tryThis = () => {
  console.log("Show in this: ", this);
};
tryThis();

const gas = {
  name: "Gas",
};
gas.showContext = tryThis;
gas.showContext();

const adele = {
  name: "Adele",
  showThis() {
    const fn = () => {
      console.log("This is: ", this);
    };
    fn();
    console.log("This is: ", this);
  },
};
adele.showThis();

// Methods call & apply

const greet = function () {
  return `Welcome to ${this.name} hotel!`;
};
const hotell = {
  name: "Grand Resort",
};
console.log(greet.call(hotell));
console.log(greet.apply(hotell));

// Call & arguments

const great = function (guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}!`;
};
const guestHouse = {
  name: "Grand Resort",
};
const motel = {
  name: "Blue lagoon",
};
console.log(great.call(guestHouse, "Mango", 5));
console.log(great.call(motel, "Poly", 4));

// Apply & arguments

const creet = function (guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}!`;
};
const guestHome = {
  name: "Grand Resort",
};
const aparts = {
  name: "Blue lagoon",
};
console.log(creet.apply(guestHome, ["Mango", 5]));
console.log(creet.apply(aparts, ["Poly", 4]));

// Bind

const build = function (guest) {
  return `${guest}, welcome to ${this.name} hotel!`;
};
const home = {
  name: "Grand Resort",
};
const homeGreeted = build.bind(home, "Ajax");
homeGreeted();

const hote = {
  name: "Grand",
  showThis() {
    console.log(this);
  },
};
const fun = function (callback) {
  callback();
};
fun(hote.showThis.bind(hote));
