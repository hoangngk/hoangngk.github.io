/////////////////////
// ES6 EXERCISES :    to Iterate over a callback n times.

//
const callbackByTimes = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

const testSomeExample = () => {
  var output = "";
  callbackByTimes(5, i => (output += i));
  console.log(output); // 01234
};

export default {
  callbackByTimes,
  testSomeExample
};
