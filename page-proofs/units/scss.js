const sass = require('sass');

const result = sass.compile("scss/style.scss");
console.log(result.css);
