/////////////////////
// ES6 EXERCISES : Cast the provided value as an array if it's not one.
//
import testData from "../data/testData";

const castArray = val => (Array.isArray(val) ? val : [val]);

const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-08:####");

  console.log(castArray("something"));
  console.log(castArray(testData.arrayData.todos));
};

export default {
  castArray,
  testSomeExample
};
