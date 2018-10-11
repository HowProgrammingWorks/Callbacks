'use strict';

const add = (a, b) => a + b;
const sum = (a, b, callback) => callback(a + b);

console.log('add(5, 2) =', add(5, 2));
sum(5, 2, console.log.bind(null, 'sum(5, 2) ='));
