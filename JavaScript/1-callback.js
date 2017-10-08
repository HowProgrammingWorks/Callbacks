'use strict';

const add = (a, b) => a + b;
const sum = (a, b, callback) => callback(a + b);

console.log('Use add: ' + add(5, 2));

sum(5, 2, (result) => {
  console.log('Use sum: ' + result);
});
