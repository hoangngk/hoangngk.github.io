/////////////////////
// ES6 EXERCISES : Copy To Clipboard//

const copyToClipboard = text => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // CSS to make this element invisible and readonly
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.style.left = "-9999px";

  document.body.appendChild(textArea);
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false;

  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  if (selected) {
    // If a selection existed, Unselect everything on the HTML document
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
const testSomeExample = () => {
  console.log("#############");
  console.log("###EX-02:####");

  console.log(
    "To test this exercies, embed this js script to document and test"
  );
};

export default {
  copyToClipboard,
  testSomeExample
};
