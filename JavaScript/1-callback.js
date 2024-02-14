'use strict';

const add = (a, b) => a + b;

const res = add(2, 3);
console.log(`add(2, 3) = ${res}`);

// Return result with callback

const sum = (a, b, callback) => callback(a + b);

sum(2, 3, (res) => {
  console.log(`sum(2, 3) = ${res}`);
});
