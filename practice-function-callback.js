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
