const union_With = (a, b, comp) =>
 Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));

console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));