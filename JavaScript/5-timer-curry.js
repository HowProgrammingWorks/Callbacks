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

const setTimeoutCallbackLast = (timeout, fn) => setTimeout(fn, timeout);

const timer = curry(setTimeoutCallbackLast);
timer(2000)(fn);

const timer5s = timer(2000);
timer5s(fn);
