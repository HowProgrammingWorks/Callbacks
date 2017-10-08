'use strict';

const adder = (value) => {
  const add = (a) => {
    value += a;
    if (value >= add.maxValue) add.maxEvent(value);
  };
  add.max = (max, event) => {
    add.maxValue = max;
    add.maxEvent = event;
    return add;
  };
  return add;
};

const maxReached = () => {
  console.log('max value reached');
};

const a1 = adder(10).max(100, maxReached);
a1(25);
a1(50);
a1(75);
