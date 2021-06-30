const chai = require('chai');
const App = require('./app');

chai.should();

describe('Add two numbers', () => {
  it('Equals 4', () => {
    const total = App.add(2, 2);
    total.should.equal(4);
  });
  it('Equals -4', () => {
    const total = App.add(-8, 4);
    total.should.equal(-4);
  });
});

describe('Substract two numbers', () => {
  it('Equals 5', () => {
    const total = App.substract(7, 2);
    total.should.equal(5);
  });
  it('Equals 0', () => {
    const total = App.substract(0, 0);
    total.should.equal(0);
  });
});

describe('Divide two numbers', () => {
  it('Equals 5', () => {
    const total = App.divide(40, 8);
    total.should.equal(5);
  });
  it('Equals 0', () => {
    const total = App.divide(10, 0);
    total.should.not.equal(0);
  });
});

describe('Multiply two numbers', () => {
  it('Equals 0', () => {
    const total = App.multiply(17, 0);
    total.should.equal(0);
  });
  it('Equals 100', () => {
    const total = App.multiply(10, 10);
    total.should.equal(100);
  });
});