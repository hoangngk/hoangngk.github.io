const time_taken = callback => {
    const result = callback();
    return result;
};
console.log("Time taken: " + time_taken(() => Math.pow(2, 10))+" ms"); 
console.log("Time taken: " + time_taken(() => Math.sqrt(225))+" ms");
console.log("Time taken: " + time_taken(() => Math.sqrt((5 * 5) + (6 * 6)))+" ms");