'use strict';

// Task: return an error for items with negative price
// Hint: use callback-last-error-first contract

const total = (items, callback) => {
  let result = 0;
  for (const item of items) {
    result += item.price;
  }
  callback(result);
};

const electronics = [
  { name: 'Laptop', price: -1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

total(electronics, (money) => {
  console.log({ money });
});
