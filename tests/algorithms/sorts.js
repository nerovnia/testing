'use strict'

const getrandarray = require('../../utils/arr.js');
const sort_bubble  = require('../../Algorithms/sorts/bubble.js');

const test = async () => {
  const chai = await import('chai');

  const randarr = getrandarray(100, 45, 400);
  
  const etalonarr = [...randarr];

  
  console.log(randarr);
};

test();

