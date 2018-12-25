/////////////////////
// ES6 EXERCISES : Decapitalize the first letter of a string.
//

const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join("").toUpperCase() : rest.join(""));

const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-05:####");

  console.log(decapitalize("AWDCourse"));
  console.log(decapitalize("CamelCase"));
  console.log(decapitalize("ISDone"));
};

export default {
  decapitalize,
  testSomeExample
};
