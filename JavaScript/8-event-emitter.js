'use strict';

const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('new city', (city) => {
  console.log(city);
});

emitter.emit('new city', 'Delhi');
emitter.emit('new city', 'Berlin');
emitter.emit('new city', 'Tokyo');
