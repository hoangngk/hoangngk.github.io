const pad = (str, length, char = ' ') =>
 str.padStart((str.length + length) / 2, char).padEnd(length, char);
console.log(pad('cat', 8));
console.log(pad(String(42), 6, '0'))
console.log(pad('foobar', 3))