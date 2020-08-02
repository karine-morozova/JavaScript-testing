const clients = ["Me", "You", "He"];
const clientToFind = "Her";
let message = "Клиента с таким именем нет в базе данных!";
for (const client of clients) {
  if (client === clientToFind) {
    message = "Клиент с таким именем есть в базе данных!";
  }
}
console.log(message);

const numbers = [13, 25, 3, 7, 58];
const numberLessThen = 15;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < numberLessThen) {
    continue;
  }
  console.log(`${numbers[i]}`);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;
for (let i = 0; i < matrix.length; i += 1) {
  console.log("Array matrix: ", matrix[i]);
  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log("Array sub-matrix: ", matrix[i][j]);
    total += matrix[i][j];
  }
}
console.log(total);

const me = "Hello world";
console.log(me.split(" "));
console.log(me.split(""));

const you = ["me", "you", "he"];
console.log(you.join(" "));
console.log(you.join(","));
console.log(you.join("-"));

const he = ["you", "he", "me"];
console.log(he.indexOf("he"));
console.log(he.indexOf("her"));
console.log(he.includes("he"));
console.log(he.includes("her"));

const redFruits = ["you", "he", "me"];
const fruit = "you";
if (redFruits.includes(fruit)) {
  console.log("It's a red friut!");
}

const her = [];
her.push();
console.log(her);
her.push(1);
console.log(her);
her.push(2);
console.log(her);
her.push(3);
console.log(her);
console.log(her.pop());
console.log(her);
console.log(her.pop());
console.log(her);
console.log(her.pop());
console.log(her);
console.log(her.pop());
console.log(her);

const his = [1, 2, 3, 4, 5, 6, 7];
console.log(his.slice(1, 5));
console.log(his.slice(1));
console.log(his.slice(-1));
console.log(his);

const scores = [1, 2, 3, 4, 5];
const scoresDeleted = scores.splice(0, 3);
console.log(scores);
console.log(scoresDeleted);

const colors = ["red", "green", "blue"];
colors.splice(1, 0, "Pink", "rose");
console.log(colors);

const languages = ["C", "C++", "Java", "JavaScript"];
console.log(languages);
languages.splice(2, 1, "Python");
console.log(languages);
languages.splice(2, 2, "Python");
console.log(languages);
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages);

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];
const allClients = oldClients.concat(newClients);
console.log(allClients);
console.log(oldClients);
console.log(newClients);

const add = function (a, b, c) {
  return a + b + c;
};
const result = add(1, 2, 3);
console.log(result); // 6

console.log(add(5, 10, 15));

const fnA = function () {
  console.log("Начала выполняться [fnA]");
  fnB();
  console.log("Продолжила выполняться [fnA] после выхода из [fnB]");
};
const fnB = function () {
  console.log("Выполняется [fnB]");
};
console.log("Начал выполнение [main]");
fnA();
console.log("Продолжил выполняться [main] после выхода из [fnA]");

const count = function (countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  for (let i = countFrom; i <= countTo; i += 1) {
    console.log(i);
  }
};
count(undefined, 5, 1);
count();

const sum = function () {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  return total;
};
console.log(sum(1, 2, 3));
console.log(sum(10, 15, 5));
console.log(sum(100, 20, 35));

const withdraw = function (amount, balance) {
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля.");
    return;
  }
  if (amount > balance) {
    console.log("Недостаточно средств на счету.");
    return;
  }
  console.log("Операция снятия средств проведена.");
};
withdraw(0, 300);
withdraw(500, 300);
withdraw(100, 300);

const ser = (...args) => {
  console.log(args);
};
ser(1, 2, 3);
