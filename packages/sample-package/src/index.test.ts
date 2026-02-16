import { describe, it, expect } from 'vitest';
import { greet, add, Calculator } from './index';

describe('greet', () => {
  it('should greet a user by name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });
});

describe('Calculator', () => {
  it('should initialize with default value of 0', () => {
    const calc = new Calculator();
    expect(calc.getValue()).toBe(0);
  });

  it('should initialize with custom value', () => {
    const calc = new Calculator(10);
    expect(calc.getValue()).toBe(10);
  });

  it('should add numbers', () => {
    const calc = new Calculator();
    calc.add(5);
    expect(calc.getValue()).toBe(5);
  });

  it('should subtract numbers', () => {
    const calc = new Calculator(10);
    calc.subtract(3);
    expect(calc.getValue()).toBe(7);
  });

  it('should chain operations', () => {
    const calc = new Calculator();
    calc.add(5).subtract(2).add(10);
    expect(calc.getValue()).toBe(13);
  });

  it('should reset to 0', () => {
    const calc = new Calculator(10);
    calc.reset();
    expect(calc.getValue()).toBe(0);
  });
});
