/////////////////////
// ES6 EXERCISES : Converts a specified number to an array of digits.//

const convertNumToDigits = number => {
  const numberString = `${number}`;
  return [...numberString].map(digit => {
    return parseInt(digit);
  });
};
const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-03:####");

  console.log(convertNumToDigits(123));
  console.log(convertNumToDigits(214124));
  console.log(convertNumToDigits(412412));
};

export default {
  convertNumToDigits,
  testSomeExample
};
