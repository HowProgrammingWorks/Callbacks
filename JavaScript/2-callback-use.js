'use strict';

const fs = require('fs');

fs.readFile('./1-callback.js', (err, data) => {
  console.log({ lines: data.toString().split('\n').length });
});

console.log('end');
