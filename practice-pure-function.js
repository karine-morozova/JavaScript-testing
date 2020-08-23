// Императивный подход

const numbers = [1, 2, 3, 4, 5];
let filteredNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}
console.log(filteredNumbers);

// Декларативный подход

const nums = [1, 2, 3, 4, 5];
const filteredNums = nums.filter((value) => {
  return value > 3;
});
console.log(filteredNums);

// Dirty function

const dirtyFunction = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const digits = [1, 2, 3, 4, 5];

dirtyFunction(digits, 2);

console.log(digits);

// Pure function

const pureFunction = (array, value) => {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i] * value);
  }
  return result;
};

const digitals = [1, 2, 3, 4, 5];

const newArray = pureFunction(digitals, 2);

console.log(digitals);
console.log(newArray);

// array.prorotype.forEach()

const numers = [1, 2, 3];

numers.forEach((num) => console.log(num));

numers.forEach((num, ind) => console.log(`Index: ${ind}, number: ${num}`));

// array.prototype.map()

const arr = [1, 2, 3];
const doubleArr = arr.map((arg) => arg * 2);

console.log(doubleArr);

const users = [
  {
    name: "Mango",
    age: 30,
  },
  {
    name: "Poly",
    age: 15,
  },
  {
    name: "Ajax",
    age: 60,
  },
];

const names = users.map((user) => user.name);

console.log(names);

// array.prototype.filter()

const goals = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(goals.filter((arg) => arg > 5));
console.log(goals.filter((arg) => arg < 5));
console.log(goals.filter((arg) => arg === 5));

const userrs = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
  { name: "Chelsey", isActive: false },
];
const activeUsers = userrs.filter((user) => user.isActive);
const unactiveUsers = userrs.filter((user) => !user.isActive);

console.log(activeUsers);
console.log(unactiveUsers);

// array.prototype.find()

const gols = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(goals.find((arg) => arg > 5));
console.log(goals.find((arg) => arg < 5));
console.log(goals.find((arg) => arg === 5));

const uses = [
  { id: "002", name: "Mango", isActive: true },
  { id: "003", name: "Poly", isActive: false },
  { id: "004", name: "Ajax", isActive: true },
  { id: "005", name: "Chelsey", isActive: false },
];
const activeUses = uses.find((use) => use.id === "004");
const unactiveUses = (arr, id) => arr.find((x) => x.id === id);

console.log(activeUses);
console.log(unactiveUses(uses, "002"));
console.log(unactiveUses(uses, "003"));

// array.prototype.every()

const numberIsBigEnough = (value) => value >= 10;
console.log([12, 5, 8, 130, 44].every(numberIsBigEnough));
console.log([12, 15, 18, 130, 44].every(numberIsBigEnough));

// array.prototype.some()

const numberIsBigEnoug = (value) => value >= 10;
console.log([2, 5, 8, 1, 4].some(numberIsBigEnough));
console.log([12, 5, 8, 130, 4].some(numberIsBigEnough));

// array.prototype.reduce()

const workers = [1, 2, 3, 4, 5];

const summ = workers.reduce((acc, value) => acc + value, 0);

console.log(summ);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes);

const countLikes = (tweets) =>
  tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(countLikes(tweets));

const instas = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tags = instas.reduce((totalTags, insta) => {
  totalTags.push(...insta.tags);
  return totalTags;
}, []);

console.log(tags);

const getTags = (instas) =>
  instas.reduce((totalTags, insta) => {
    totalTags.push(...insta.tags);
    return totalTags;
  }, []);

console.log(getTags(instas));

const forbs = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const takeTags = (instas) =>
  instas.reduce((totalTags, insta) => {
    totalTags.push(...insta.tags);
    return totalTags;
  }, []);

const taggs = takeTags(forbs);
console.log(taggs);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
};

const countTags = (taggs) => taggs.reduce(getTagStats, {});

const tagsCount = countTags(taggs);

console.log(countTags(taggs));
console.log(tagsCount);
