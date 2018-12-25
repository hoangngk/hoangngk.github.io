/////////////////////
// ES6 EXERCISES :    to split a multiline string into an array of lines.

//
const splitLines = str => str.split(/\r?\n/);

const testSomeExample = () => {
  console.log("Original string:");
  console.log("This\nis a\nmultiline\nstring.\n");
  console.log(splitLines("This\nis a\nmultiline\nstring.\n"));
};

export default {
  splitLines,
  testSomeExample
};
