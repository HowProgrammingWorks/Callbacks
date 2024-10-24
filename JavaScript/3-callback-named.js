'use strict';

const fs = require('node:fs');

{
  const print = (file, err, data) => {
    console.log({ file, lines: data.split('\n').length });
  };

  const fileName = './1-callback.js';

  const callback = print.bind(null, fileName);
  fs.readFile(fileName, 'utf8', callback);
}

// Callback with closure

{
  const print = (file) => (err, data) => {
    if (err) console.error(err);
    console.log({ file, lines: data.split('\n').length });
  };

  const fileName = './1-callback.js';

  const callback = print(fileName);
  fs.readFile(fileName, 'utf8', callback);
}
