'use strict';

// Task: rewrite function to return result into sync callback

// Change signature to: (items, callback(result))
const total = (items) => {
  let result = 0;
  for (const item of items) {
    result += item.price;
  }
  return result;
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

// Use new signature total(electronics, (money) => ...)
const money = total(electronics);
console.log({ money });
