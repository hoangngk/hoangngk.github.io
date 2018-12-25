/////////////////////
// ES6 EXERCISES : Chain asynchronous functions.

//
import testData from "../data/testData";

const chainAsync = funcs => {
  let current = 0;
  const next = () => funcs[current++](next);
  next();
};

const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-09:####");

  chainAsync([
    next => {
      console.log("something");
      setTimeout(next, 1000);
    },
    next => {
      console.log(testData.arrayData.todos);
    }
  ]);
};

export default {
  chainAsync,
  testSomeExample
};
