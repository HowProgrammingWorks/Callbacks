'use strict';

const curry = (fn, ...par) => {
  const curried = (...args) => (
    fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args)
  );
  return par.length ? curried(...par) : curried;
};

const fn = () => {
  console.log('Callback from from timer');
};

const timeout = (interval, fn) => setTimeout(fn, interval);

const timer = curry(timeout);
timer(2000)(fn);

const timer2s = timer(2000);
timer2s(fn);
