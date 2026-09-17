const assert = require('assert');
const { add, subtract } = require('./calculator');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(subtract(5, 3), 2);

console.log('All tests passed!');
