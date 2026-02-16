/**
 * Sample utility function that greets a user
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Sample utility function that adds two numbers
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Sample class for demonstration
 */
export class Calculator {
  private value: number;

  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(n: number): this {
    this.value += n;
    return this;
  }

  subtract(n: number): this {
    this.value -= n;
    return this;
  }

  getValue(): number {
    return this.value;
  }

  reset(): void {
    this.value = 0;
  }
}
