var uniqueInOrder = function (iterable) {
  const res = [];

  for (let i = 0; i < iterable.length; i++) {
    const el = iterable[i];
    if (el !== iterable[i + 1]) {
      res.push(el);
    }
  }
  return res;
};



// uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
// uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

var uniqueInOrder = function (iterable) {
  return Array.prototype.filter.call(iterable, function (current, index) {
    return iterable[index - 1] !== current;
  });
};