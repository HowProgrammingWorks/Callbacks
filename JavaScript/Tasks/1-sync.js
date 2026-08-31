'use strict';

// Task: rewrite function to return result into sync callback

// Change signature to: (items, callback(result))
const total = (items, callback) => {
  let result = 0;
  for (const item of items) {
    result += item.price;
  }
  callback(result);

};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

// Use new signature total(electronics, (money) => ...)
total(electronics, (money) => console.log(money));
