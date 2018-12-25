/////////////////////
// ES6 EXERCISES :   remove an event listener from an element.

//
const removeEvent = (element, event, fn) =>
  element.removeEventListener(event, fn);

const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-012:####");

  const someFunc = () => console.log("something");
  if (document !== undefined) {
    document.body.addEventListener("click", someFunc);
    console.log(removeEvent(document.body, "click", someFunc));
  }
};

export default {
  removeEvent,
  testSomeExample
};
