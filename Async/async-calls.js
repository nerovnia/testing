const wrapAsync = fn => (...args) => setTimeout(
  () => fn(...args), Math.floor(Math.random() * 1000)
);

const readConfig = wrapAsync((name, callback) => {
  console.log('(1) config loaded');
  callback(null, { name })
})

readConfig('er', (something, name ) => console.log('sdfsdf', something, name));
console.log('First output');