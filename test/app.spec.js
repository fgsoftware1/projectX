import { should } from 'chai';
import { add, substract, divide, multiply } from './app';

should();

describe('Add two numbers', () => {
  it('Equals 4', () => {
    const total = add(2, 2);
    total.should.equal(4);
  });
  it('Equals -4', () => {
    const total = add(-8, 4);
    total.should.equal(-4);
  });
});

describe('Substract two numbers', () => {
  it('Equals 5', () => {
    const total = substract(7, 2);
    total.should.equal(5);
  });
  it('Equals 0', () => {
    const total = substract(0, 0);
    total.should.equal(0);
  });
});

describe('Divide two numbers', () => {
  it('Equals 5', () => {
    const total = divide(40, 8);
    total.should.equal(5);
  });
  it('Equals 0', () => {
    const total = divide(10, 0);
    total.should.not.equal(0);
  });
});

describe('Multiply two numbers', () => {
  it('Equals 0', () => {
    const total = multiply(17, 0);
    total.should.equal(0);
  });
  it('Equals 100', () => {
    const total = multiply(10, 10);
    total.should.equal(100);
  });
});