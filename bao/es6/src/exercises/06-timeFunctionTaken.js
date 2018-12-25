/////////////////////
// ES6 EXERCISES : Measure the time taken by a function to execute.
//
import testData from "../data/testData";

const timeFunctionTaken = callback => {
  const result = callback();
  return result;
};

const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-06:####");

  console.log("Time taken: " + timeFunctionTaken(() => Math.pow(5, 7)) + " ms");
  console.log(
    "Time taken: " +
      timeFunctionTaken(() => {
        let count = 0;
        testData.arrayData.todos.forEach(todo => {
          count++;
        });
        return count;
      })
  );
  console.log(
    "Time taken: " + timeFunctionTaken(() => Math.sqrt(5 * 5 + 6 * 6)) + " ms"
  );
};

export default {
  timeFunctionTaken,
  testSomeExample
};
