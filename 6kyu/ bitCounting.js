var countBits = function (n) {
  const binary = Array.from(n.toString(2));
  console.log(binary);
  return binary.reduce((acc, n) => {
    if (n === "1") {
      acc += 1;
    }
    return acc;
  }, 0);
};


// const { assert } = require("chai");

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(countBits(0), 0);
//     assert.strictEqual(countBits(4), 1);
//     assert.strictEqual(countBits(7), 3);
//     assert.strictEqual(countBits(9), 2);
//     assert.strictEqual(countBits(10), 2);
//   });
// });