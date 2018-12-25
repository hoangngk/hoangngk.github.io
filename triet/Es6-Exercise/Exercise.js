

//Ex 1
console.log('Ex1');
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ number: 25, name: 'hong', status: true }, { name: 'hong', status: true })); 
console.log(matches({ name: 'hong', status: true }, { number: 25, name: 'hong', status: true })); 
console.log(matches({ name: 'hong', status: true }, { number: 26, name: 'hong', status: true }));

//Ex 3
console.log('Ex3');
const a = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};
console.log(a('col1,col2\na,b\nc,d')); 
console.log(a('col1;col2\na;b\nc;d', ';'));

//Ex5
console.log('Ex5');
const b = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');

console.log(b([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
console.log(b([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));

//Ex6
console.log('Ex6');
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'status'));
console.log(dig(dog, 'message'));

//Ex7
console.log('Ex7');
const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));

//Ex8
console.log('Ex8');
function isEven(value) {
  return value % 2 == 0;
}

var filtered = [11, 98, 31, 23, 944].filter(isEven);
console.log(filtered);

//Ex9
console.log('Ex9');
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));

//Ex10
console.log('Ex10');
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function arrayRemove(arr, value) {
   return arr.filter(function(ele){
       return ele != value;
   });
}
var result = arrayRemove(array, 6);
console.log(result);
console.log(array);

//Ex11
console.log('Ex11');
var letters = "0123456789ABCDEF"; 
var color = '#'; 
for (var i = 0; i < 6; i++) 
	color += letters[(Math.floor(Math.random() * 16))];
console.log(color);

//Ex12
console.log('Ex12');
const non_asci = str => str.replace(/[^\x20-\x7E]/g, '');
console.log(non_asci('äÄçÇéÉêhoangtriöeÖtÐþúÚ'));

//Ex20
console.log('Ex20');
const extend_Hex = shortHex =>
  '#' +
  shortHex
  	.slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');
console.log(extend_Hex('#06c'));

//Ex21
console.log('Ex21');
const e = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(e(array, 2));
