'use strict';

const getConferences = () => {
  let onDone = null;
  const deferred = {
    onData: callback => onDone = callback
  };
  setTimeout(() => {
    if (onDone) onDone(['Tehran', 'Yalta', 'Potsdam']);
  }, 5000);
  return deferred;
};

// Usage

const conferences = getConferences();

console.log(conferences);

conferences.onData(list => {
  console.log(list);
});

console.log('end');
