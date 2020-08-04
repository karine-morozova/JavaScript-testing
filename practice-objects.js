const hotel = {
  name: "Grand Lion",
  stars: 5,
  capacity: 100,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

hotel.showName();
hotel.changeCapacity(200);
console.log(hotel.capacity);
