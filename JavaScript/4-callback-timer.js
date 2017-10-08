'use strict';

const fn = () => {
  console.log('Callback from from timer');
};

setTimeout(fn, 5000);
