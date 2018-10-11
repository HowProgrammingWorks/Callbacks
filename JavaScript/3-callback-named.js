'use strict';

const fs = require('fs');

const print = (fileName, err, data) => {
  console.log({ lines: data.split('\n').length });
};

const fileName = './1-callback.js';

const callback = print.bind(null, fileName);
fs.readFile(fileName, 'utf8', callback);
