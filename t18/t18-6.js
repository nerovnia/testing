function createCounter() {
  let count = 0;

  function increment() {
    return ++count;
  }

  function decrement() {
    return --count;
  }

  return {
    increment,
    decrement
  }
}

const result = createCounter();

result.increment();
result.increment();
result.increment();
result.increment();
result.increment();

console.log(result.increment());