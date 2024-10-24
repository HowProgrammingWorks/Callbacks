'use strict';

// In sync operations

{
  const boxes = [{ count: 3 }, { count: 0 }, { count: 7 }];
  const goods = boxes.filter(({ count }) => count > 0);
  console.log({ goods });
}

// Named callbacks

{
  const boxes = [{ count: 3 }, { count: 0 }, { count: 7 }];
  const notEmpty = ({ count }) => count > 0;
  const goods = boxes.filter(notEmpty);
  console.log({ goods });
}

// In async operations

const boxes = [{ count: 3 }, { count: 0 }, { count: 7 }];

const timer = setInterval(() => {
  const next = boxes.shift();
  console.log(`Next box contains: ${next.count}`);
  if (boxes.length === 0) clearInterval(timer);
}, 10);

// In async I/O

const fs = require('node:fs');

fs.readFile('./1-callback.js', 'utf8', (err, data) => {
  if (err) console.error(err);
  console.log({ lines: data.split('\n').length });
});

console.log('end');
