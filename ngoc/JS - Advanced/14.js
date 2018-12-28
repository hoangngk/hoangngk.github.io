
const rename_keys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );

const obj = { name: 'ngoc', job: 'dev'};
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = rename_keys({ name: 'fullname'}, obj);
console.log("New Object");
console.log(result);