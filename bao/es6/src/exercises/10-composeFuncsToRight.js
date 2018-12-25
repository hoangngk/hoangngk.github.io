/////////////////////
// ES6 EXERCISES : Chain asynchronous functions.

//

const composeRight = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));

const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-010:####");

  const add = (x, y) => x + y;
  const square = x => x * x;
  const addAndSquare = composeRight(add, square);

  console.log(addAndSquare(1, 2));
  console.log(addAndSquare(3, 2));
};

export default {
  composeRight,
  testSomeExample
};
