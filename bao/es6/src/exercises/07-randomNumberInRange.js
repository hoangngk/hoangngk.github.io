/////////////////////
// ES6 EXERCISES : Get a random integer in the specified range.
//

const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-07:####");

  console.log(randomIntegerInRange(100, 52));
  console.log(randomIntegerInRange(23, 6));
  console.log(randomIntegerInRange(1000, -500));
};

export default {
  randomIntegerInRange,
  testSomeExample
};
