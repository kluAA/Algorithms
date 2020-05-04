var kWeakestRows = function (mat, k) {
    const map = new Map();
    for (const [i, m] of mat.entries()) {
        map.set(i, m.reduce((a, b) => a + b));
    }
    console.log(map);
    return [...map.keys()].sort((a, b) => map.get(a) !== map.get(b) ? map.get(a) - map.get(b) : a - b)
        .slice(0, k);
};

let mat =
    [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]]
  let k = 3

console.log(kWeakestRows(mat, k))