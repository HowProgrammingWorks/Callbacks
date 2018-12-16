'use strict';

class Deferred {
  constructor() {
    this.value = undefined;
    this.error = null;
    this.finished = false;
    this.events = {};
  }

  resolve(value) {
    if (this.finished) return;
    this.value = value;
    this.finished = true;
    const event = this.events['done'];
    if (event) event.forEach(fn => fn(value));
  }

  reject(err) {
    if (this.finished) return;
    this.error = err;
    this.finished = true;
    const event = this.events['fail'];
    if (event) event.forEach(fn => fn(err));
  }

  done(fn) {
    if (this.finished) return;
    const event = this.events['done'];
    if (event) event.push(fn);
    else this.events['done'] = [fn];
    return this;
  }

  fail(fn) {
    if (this.finished) return;
    const event = this.events['fail'];
    if (event) event.push(fn);
    else this.events['fail'] = [fn];
    return this;
  }
}

// Usage

const conferences = new Deferred()
  .done(list => {
    console.log(list);
  })
  .fail(err => {
    throw err;
  });

console.log(conferences);

conferences.resolve(['Tehran', 'Yalta', 'Potsdam']);
conferences.reject(new Error('Never occurs'));
