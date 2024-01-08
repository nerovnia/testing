function someFn() {
  console.log(arguments);
}

Function.prototype.delay = function (delay) {
  return function (...arg) {
    setTimeout(() => {
      this(...arg);
    }, delay);
  }.bind(this);
};

const someFuncWithDelay = someFn.delay(2000);
someFuncWithDelay("arg1", 2, []);
