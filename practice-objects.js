// const hotel = {
//   name: "Grand Lion",
//   stars: 5,
//   capacity: 100,
// showName() {
//   console.log(this.name);
// },
// changeCapacity(value) {
//   this.capacity = value;
// },
// };

// hotel.showName();
// hotel.changeCapacity(200);
// console.log(hotel.capacity);
// for (const key in hotel) {
//   console.log("Key: ", key);
// }
// for (const key in hotel) {
//   console.log("Value: ", hotel[key]);
// }
// const keys = Object.keys(hotel);
// console.log(keys);
// for (const key of keys) {
//   console.log("Value: ", hotel[key]);
// }
// const values = Object.values(hotel);
// console.log(values);
// const entries = Object.entries(hotel);
// console.log(entries);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(`${key}: ${value}`);
// }
const goods = {
  apple: 10,
  grapes: 5,
  peach: 12,
  watermelon: 3,
};
console.log(goods);
const values = Object.values(goods);
let total = 0;
for (const value of values) {
  total += value;
}
console.log(total);

const temperatures = [2, 56, 48, 23, 1];
const min = Math.min(...temperatures);
console.log(min);

const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];
// const newHouses = [...houses.slice(0, 2), ...houses.slice(3)];
const newHouses = [...houses.slice(0, 2), "Kiwi", ...houses.slice(3)];
console.log(newHouses);
const a = { x: 3, y: 4 };
const b = { x: 0, z: 5 };
// const c = Object.assign({}, a, b);
const c = { x: 6, j: 7, ...a, z: 8, ...b };

console.log(c);

const add = function (value, kiss, ...args) {
  console.log(value);
  console.log(kiss);
  console.log(args);
};
add(10, 20, 1, 2, 3, 4);
add(15, 5, 6, 7);

const hotel = {
  name: "Grand Lion",
  stars: 5,
  capacity: 100,
};

// const { name, stars, status } = hotel;
// const { name = "Onion", stars = 3, status = "empty" } = hotel;
// const { name: hotelName, stars, status: hotelStatus = "empty" } = hotel;
const { name, ...value } = hotel;
console.log(name);
console.log(value);

const rgb = [255, 200, 100, 345];
const [, , , blue] = rgb;
// const [red, ...colors] = rgb;
// let red, green, blue;
// [red, green, blue] = rgb;
// const [red, green, blue] = rgb;
// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(`Red: ${red}, Colors: ${colors}`);
console.log(blue);

// console.log(red, green, blue, alfa);
