import { greet, add, Calculator } from '@pcvera-puzzles/sample-package';

console.log('=== Sample App ===\n');

// Test the greet function
console.log(greet('World'));
console.log(greet('Turbo Monorepo'));

// Test the add function
console.log(`\n2 + 3 = ${add(2, 3)}`);
console.log(`10 + 20 = ${add(10, 20)}`);

// Test the Calculator class
const calc = new Calculator(10);
console.log(`\nInitial value: ${calc.getValue()}`);
calc.add(5).subtract(3);
console.log(`After add(5).subtract(3): ${calc.getValue()}`);
calc.reset();
console.log(`After reset(): ${calc.getValue()}`);

console.log('\n✅ All tests passed!');
