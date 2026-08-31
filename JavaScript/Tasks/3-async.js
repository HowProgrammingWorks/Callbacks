'use strict';

// Task: rewrite `total` function to be async with JavaScript timers
// Use `setInterval` and `clearInterval` to check next item each 1 second
// Calculations will be executed asynchronously because of timers
// Run `total` twice (as in example below) but in parallel
// Print debug output for each calculation step (each second)
//
// Hint: example output:
// { check: { item: { name: 'Laptop', price: 1500 } } }
// { check: { item: { name: 'Laptop', price: 1500 } } }
// { check: { item: { name: 'Keyboard', price: 100 } } }
// { check: { item: { name: 'Keyboard', price: 100 } } }
// { check: { item: { name: 'HDMI cable', price: 10 } } }
// { check: { item: { name: 'HDMI cable', price: 10 } } }
// { money: 1610 }
// { money: 1610 }

const total = async (items, callback) => {
  let result = 0;
  let index = 0;
  await new Promise((res, rej)=> {
      const timerId = setInterval(()=>{
        const item = items[index];
        if(!item){
          clearInterval(timerId)
          res();
          return
        } 
        console.log({ check: { item } });
        if (item.price < 0) {
          rej(new Error('Negative price is not allowed'));
          clearInterval(timerId)
          return;
        }
        result += item.price;
        index+=1;
      }, 1000)
  
 
  }).then(()=>callback(null, result)).catch(err=>callback(err))
  
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

total(electronics, (error, money) => {
  if (error) console.error({ error });
  else console.log({ money });
});

total(electronics, (error, money) => {
  if (error) console.error({ error });
  else console.log({ money });
});
