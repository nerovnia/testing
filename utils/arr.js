'use strict'

const getrandarr = (arrlength, minvalue, maxvalue) => {
  const resarr = [];
  for (let i = 0; i < arrlength; i++) {
    resarr.push(Math.floor(Math.random() * (maxvalue - minvalue)) + minvalue);
  }
  return [...resarr];
}

const isArraysEqual = (arr1, arr2) => {
  if (!(Array.isArray(arr1) && Array.isArray(arr2))) return false;
  if (arr1.length !== arr2.length) return false;
  if (arr1 === arr2) return true;
  let res = true;
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) res = false;
  }
  return res;
}

const getMinMaxValue = (arr) => {
  const result = {
    minvalue: NaN,
    maxvalue: NaN,
  }
  if (!(Array.isArray(arr1))) return result;
  for (const value of arr) {
    if (!(Number.isFinite(value))) {
        result.minvalue = NaN;
        result.maxvalue = NaN;
        return result;
    }
    if ((result.minvalue === NaN) || (value  < result.minvalue)) result.minvalue = value;
    if ((result.maxvalue === NaN) || (value  > result.maxvalue)) result.maxvalue = value;
  }
  return result;
}

const isAnyObjPropertyNaN = (obj) => {
  if (typeof obj !== 'object') return true;
  for(const key in obj) {
    if (obj[key] === NaN) return true;
  }
  return false;
}

const isAllObjPropertyNaN = (obj) => {
  if (typeof obj !== 'object') return true;
  const res = null;
  for(const key in obj) {
    if ((obj[key] === NaN) && (res === null)) {
      res = true;
    }
    if ((res === true) && ((obj[key] !== NaN))) {
      res = false;
    }
  }
  if (res === null) res = false;
  return res;
}


module.exports =  
  { 
    getrandarr, 
    isArraysEqual, 
    getMinMaxValue,
    isAnyObjPropertyNaN,
    isAllObjPropertyNaN,
  };
