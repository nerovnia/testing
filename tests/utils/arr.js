'use strict'

const {
  getrandarr,
  isArraysEqual,
  getMinMaxValue,
  isAnyObjPropertyNaN,
  isAllObjPropertyNaN,
} = require("../../utils/arr.js");
const r = require("../../utils/arr.js");

const t_par_getrandarr = [
  {
    length: 10,
    min: 0,
    max: 19,
  },
  {
    length: 15,
    min: 16,
    max: 84,
  },
  {
    length: 25,
    min: 1014,
    max: 80004,
  },
];

const test_obkectAnyNaN = [
  {
    id: 1,
    obj: {
      key1: "value1",
      key2: NaN,
    },
    errStr: "NaN isn't present",
    check: function () { return isAnyObjPropertyNaN(this.obj) }
  },
  {
    id: 2,
    obj: {
      key1: NaN,
      key2: NaN,
    },
    errStr: "NaN is present",
    check: function () { return isAnyObjPropertyNaN(this.obj) }
  },
  {
    id: 3,
    obj: {
      key1: 1,
      key2: "NaN",
    },
    errStr: "NaN isn't present",
    check: function () { return !isAnyObjPropertyNaN(this.obj) }
  },
];

const test = async () => {
  console.log('**************************************************************')
  console.log('* Utils tests started')
  console.log('**************************************************************')
  const chai = await import("chai");

  const t_isAnyObjPropertyNaN = (arrobj) => {
    for (const o of arrobj) {
      console.log(`id=${o.id} ${o.check()} ${o.errStr}`);
      chai.assert(o.check(), o.errStr);
    }
  };

  t_isAnyObjPropertyNaN(test_obkectAnyNaN);
};

const t_getMinMaxValue = () => {
  getMinMaxValue("string of text");
  getMinMaxValue("string of text");
  getMinMaxValue([1, 3, "as", 3]);
  getMinMaxValue([15, 18, 33, 71, 67, 63, 65, 34]);
  getMinMaxValue([]);
  getMinMaxValue({});
  //assert( , );
};

const t_getrandarr = (pars) => {
  for (const par of pars) {
    const arr = getrandarr(par.length, par.min, par.max);
    arr.length = par.length;
  }
};

//console.log(test_getrandarr(t_par_getrandarr));

test();
