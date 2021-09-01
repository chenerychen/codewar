function generatePairs(m, n) {
  const res = [];

  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      res.push([i, j]);
    }
  }
  return res;
}


// m = 2;
// n = 4;

// result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)];