// 8. Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values.

const filterArray = (source, filterdValues) => {
    return source.filter(value => filterdValues.indexOf(value) == -1);
}

console.log(filterArray([1, 2, 3, 4, 5, 4], [2, 4]));