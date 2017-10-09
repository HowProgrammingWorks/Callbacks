'use strict';

const adder = (value) => {
  const add = (a) => {
    value += a;
    if (value >= add.maxValue) add.maxEvent(value);
    return add;
  };
  add.max = (max, event) => {
    add.maxValue = max;
    add.maxEvent = event;
    return add;
  };
  return add;
};

// Usage

const maxReached = (value) => {
  console.log('max value reached, value: ' + value);
};

const a1 = adder(10).max(100, maxReached)(-5);

a1(25);
a1(50);
a1(75);
a1(100);
a1(-200)(50)(30);
