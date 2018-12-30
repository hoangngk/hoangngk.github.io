function remove_from_left(arr, n = 1){
    return arr.slice(n); 
}
console.log(remove_from_left([1, 2, 3]));
console.log(remove_from_left([1, 2, 3], 1));
console.log(remove_from_left([1, 2, 3], 2));
console.log(remove_from_left([1, 2, 3], 4));