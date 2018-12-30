const find = (arr, comparator = (a, b) => { a - b }) => {
    arr.reduce((a, b) => comparator(a, b) >= 0 ? a : b);
}

console.log(find([1, 2, 3]));
