const extend_Hex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

console.log(extend_Hex('#03f'));
console.log(extend_Hex('05a'));