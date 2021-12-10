const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', ()=> {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

it('reports the average as NaN on high coefficient of variance', ()=> {
  // Default threshold set to 0.25 change based on process data
  // Other alternatives include using interquartiles or limiting max delta
  expect(average([1, 3, 10, 11])).to.be.NaN;
});
