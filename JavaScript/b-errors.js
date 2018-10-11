'use strict';

// Implementation

const adder = value => {
  const add = a => {
    value += a;
    if (value >= add.maxValue) {
      setImmediate(() => {
        const err = new Error('max value reached');
        add.maxEvent(err, value);
      });
    }
    return add;
  };
  // callback-last
  add.max = (max, event) => {
    add.maxValue = max;
    add.maxEvent = event;
    return add;
  };
  return add;
};

// Usage

// error-first
const maxReached = (err, value) => {
  if (err) throw err;
  console.log('value:', value);
};

try {
  const a1 = adder(10).max(100, maxReached)(-5);
  a1(25);
  a1(50);
  a1(75);
  a1(100);
  a1(-200)(50)(30);
} catch (e) {
  console.log('Never');
}

console.log('end');
