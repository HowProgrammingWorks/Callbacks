'use strict';

const fn = () => {
  console.log('Callback from timer');
};

const timeout = (interval, fn) => setTimeout(fn, interval);

timeout(5000, fn);

// Node timers promises

(async () => {
  const { setTimeout } = require('node:timers/promises');

  setTimeout(1000, 'Hello').then((data) => {
    console.log(data);
  });

  await setTimeout(1000);
  console.log('Done');
})();
