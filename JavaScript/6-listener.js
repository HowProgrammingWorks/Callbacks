'use strict';

const iterate = (array, listener) => {
  for (const item of array) {
    listener(item);
  }
};

const cities = ['Kiev', 'London', 'Beijing'];

const each = city => {
  console.log('City: ' + city);
};

iterate(cities, each);
