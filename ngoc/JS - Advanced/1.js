const matches = (source, destination) => Object.keys(source).every(key => destination.hasOwnProperty(key) && destination[key] === source[key]);

source = { 
  name : 'ngoc',
  age: 21
};

destination = {
  age: 21,
  name : 'ngoc'
};

console.log(matches(source, destination));