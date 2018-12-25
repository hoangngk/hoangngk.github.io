/////////////////////
// ES6 EXERCISES :    to convert a string to snake case.

//
const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join("_");

const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-013:####");

  console.log(toSnakeCase("something"));
  console.log(toSnakeCase("niansdinsaiwnai"));
  console.log(toSnakeCase("902193021sfasdf940124"));
};

export default {
  toSnakeCase,
  testSomeExample
};
