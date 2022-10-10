'use strict';

const fs = require('node:fs');

fs.readFile('./1-callback.js', 'utf8', (err, data) => {
  console.log({ lines: data.split('\n').length });
});

console.log('end');
