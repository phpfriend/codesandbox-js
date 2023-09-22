// find out minimum value from a object

const Obj = { 1: 5, 4: 2, 5: 1 };
const minimum = Object.keys(Obj)
  .map(function (key) {
    return {
      key: key,
      value: Obj[key]
    };
  })
  .sort(function (a, b) {
    return a.value - b.value;
  })[0];

console.log(minimum);
