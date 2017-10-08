'use strict';

const fs = require('fs');

const print = (err, data) => {
  console.log({ lines: data.toString().split('\n').length });
};

const fileName = './1-callback.js';

fs.readFile(fileName, print);
