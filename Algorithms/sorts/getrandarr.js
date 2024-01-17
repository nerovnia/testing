'use strict'

const getrandarr = (arrlength, minvalue, maxvalue) => {
  const resarr = [];
  for (let i = 0; i < arrlength; i++) {
    resarr.push(Math.floor(Math.random() * (maxvalue - minvalue)) + minvalue);
  }
  return [...resarr];
}

module.exports = { getrandarr };
