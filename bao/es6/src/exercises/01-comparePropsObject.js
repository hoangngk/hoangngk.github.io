/////////////////////
// ES6 EXERCISES : Compare two objects//

import testData from "../data/testData";

const comparePropsObject = (firstObject, secondObject) => {
  return Object.keys(secondObject).every(key => {
    return (
      firstObject.hasOwnProperty(key) && firstObject[key] === secondObject[key]
    );
  });
};
const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-01:####");
  console.log(comparePropsObject(testData.post01, testData.post03));
  // false - because has no same property values
  console.log(comparePropsObject(testData.post01, testData.post01));
  // true - because two objecsts have the same property values
  console.log(comparePropsObject(testData.post01, testData.post02));
  // false
};

export default {
  comparePropsObject,
  testSomeExample
};
