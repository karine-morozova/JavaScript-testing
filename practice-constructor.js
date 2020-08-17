const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
  this.guestCount = 0;
  this.greet = function (guestName) {
    console.log(`${guestName}, welcome to ${name}!`);
  };
  this.addGuest = function (amount) {
    this.guestCount += amount;
  };
  this.removeGuest = function (amount) {
    this.guestCount -= amount;
  };
};

const hotel = new Hotel("Grand", 5, 100);
console.log(hotel);

hotel.greet("Mango");
console.log(hotel.greet);
hotel.addGuest(100);
hotel.removeGuest(80);

// const motel = new Hotel("Lion", 4, 50);
// console.log(motel);

// const poly = {
//   name: "Poly",
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `${this.name} sold ${product}`;
//   },
// };
const Manager = function (name = "", sales = 0) {
  this.name = name;
  this.sales = sales;
  this.sell = function (product) {
    this.sales += 1;
    return `${this.name} sold ${product}`;
  };
};
const poly = new Manager("Poly", 5);
console.log(poly);
console.log(poly.sell("tv"));
console.log(poly.sell("phone"));
console.log(poly);

// const mango = {
//   name: "Mango",
//   sales: 9,
//   sell(product) {
//     this.sales += 1;
//     return `${this.name} sold ${product}`;
//   },
// };
const mango = new Manager("Mango", 9);
console.log(mango);
console.log(mango.sell("tv"));
console.log(mango.sell("phone"));
console.log(mango);

const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

// for (const key of dog) {
//   if (!dog.hasOwnProperty(key)) continue;
//   console.log(key);
// }
const doKeys = Object.keys(dog);
console.log(doKeys);
// const dog = {
//   age: 18,
// };
// dog.__proto__ = animal;

// console.log(dog.name);
// console.log(dog.age);

const Customer = function (name, room) {
  this.name = name;
  this.room = room;
};
console.log(Customer.prototype);

Customer.prototype.showGuestInfo = function () {
  console.log(`name: ${this.name}, room: ${this.room}`);
};
const ajax = new Customer("Ajax", 311);

const kiwi = new Customer("Kiwi", 315);
ajax.showGuestInfo();
kiwi.showGuestInfo();

// console.log(ajax);
// console.log(kiwi);

const Shop = function (item, quantity) {
  this.item = item;
  this.quantity = quantity;
};

Shop.prototype.sales = function (amount) {
  console.log(`${this.item} has taken ${amount} times.`);
  this.quantity += amount;
};

const Super = function (item, quantity, price) {
  Shop.call(this, item, quantity);
  this.price = price;
};

Super.prototype = Object.create(Shop.prototype);

Super.prototype.constructor = Super;

const apple = new Super("mango", 13, 50);

console.log(apple);
console.log(apple.sales(10));
console.log(apple);

class Restaurant {
  constructor(name, room) {
    this.name = name;
    this.room = room;
  }
  getFullInfo() {
    console.log(`Customer ${this.name} lives at ${this.room} room.`);
  }
}

console.log(typeof Restaurant);
console.log(Restaurant.prototype);

const restaurant = new Restaurant("Kari", 30);

console.log(restaurant);
console.log(restaurant instanceof Restaurant);
console.log(restaurant instanceof Object);
restaurant.getFullInfo();

class Cafe {
  constructor(name, room) {
    this._name = name;
    this._room = room;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

const alex = new Cafe("Alex", 20);
console.log(alex.name);
alex.name = "funny";
console.log(alex.name);

class Zoo {
  constructor(name) {
    this.name = name;
  }
  move() {
    console.log(`I, ${this.name}, am moving!`);
  }
}
class Cat extends Zoo {
  constructor(name, breath) {
    super(name);
    this.breath = breath;
  }
  bark() {
    console.log("meyw!");
  }

  moveAndMakeSound() {
    super.move();
    this.bark();
  }
}

const cat = new Cat("Mango", "shepherd");

console.log(cat);
cat.bark();
cat.moveAndMakeSound();
