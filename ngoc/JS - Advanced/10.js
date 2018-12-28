// 10. Write a JavaScript program to extract out the values at the specified indexes from an specified array.

let arr = [1, 2, 3, 4, 5];
let indexs = [2 ,3];
let result = [];

indexs.forEach(value => {
    result.push(arr[value]);
})

console.log(result);