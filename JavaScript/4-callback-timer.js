'use strict';

const fn = () => {
  console.log('Callback from from timer');
};

const timeout = (interval, fn) => setTimeout(fn, interval);

timeout(5000, fn);
