function createCounter() {
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  return {
    count,
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
result.increment();
console.log(result.count);