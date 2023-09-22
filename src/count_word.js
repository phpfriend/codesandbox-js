const arrWord = ["Hello", "Hi", "Thanks", "bye", "Hello", "How", "bye"];

// function countWord(arrWord) {
//   let count = arrWord.reduce((allNames, name) => {
//     if (allNames && name in allNames) {
//       allNames[name]++;
//     } else {
//       allNames[name] = 1;
//     }
//     return allNames;
//   }, {});
//   return count;
// }

// const returnObj = countWord(arrWord);
// console.log(returnObj);

const returnObj1 = (arrWord) => {
  let count = {};
  arrWord.forEach((item) => {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });
  return count;
};

console.log(returnObj1(arrWord));
