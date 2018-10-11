'use strict';

const iterate = (array, listener) => {
  let counter = 0;
  // setImmediate or setTimeout(0) or process.nextTick
  setInterval(() => {
    listener(array[counter++]);
    if (counter >= array.length) counter = 0;
  }, 1000);
};

const cities = ['Kiev', 'London', 'Beijing'];

const print = city => console.log('Next city:', city);

iterate(cities, print);
