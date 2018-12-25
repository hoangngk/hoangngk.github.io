/////////////////////
// ES6 EXERCISES : Target a given value in a nested JSON object, based on the given key.
//
import testData from "../data/testData";

const getValueByKey = (object, key) => {
  return key in object
    ? object[key]
    : Object.values(object).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === "object") return getValueByKey(val, key);
      }, undefined);
};
const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-04:####");

  console.log(getValueByKey(testData.nestedData, "title"));
  console.log(getValueByKey(testData.nestedData, "brief"));
  console.log(getValueByKey(testData.nestedData, "isDone"));
};

export default {
  getValueByKey,
  testSomeExample
};
