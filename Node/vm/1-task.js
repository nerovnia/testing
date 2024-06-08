const vm = require('vm');

// Create a new sandbox context
const sandbox = {
  console: console,
  math: Math,
  global: {},
};

global.myvar = 23;
const context = vm.createContext(sandbox);

// Run some code in the sandbox
vm.runInContext('console.log(math.PI);', context);
vm.runInContext('console.log(global.myvar);', context);
// Output: 3.141592653589793
console.log(global.myvar);