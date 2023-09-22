// Create shallow and deep copy of javascript object

const obj1 = {
  name: "Yogesh",
  age: "34",
  location: {
    country: "India",
    city: "chandigarh"
  },
  about: function () {
    console.log("Yogesh is a software developer");
  }
};

// Make a shallow copy
// In shallow copy changing anything in copy object will mutate original one
// const obj2 = obj1;
// console.log("obj2>>", obj2);
// obj2.name = "Rajesh";
// console.log(obj1.name);

// Deep copy
// There are many method for making deep copy but all there are with some exception
// 1: Stringify method : doen't copy method
// 2: Object.assign(): doesn't work when there is nested object in original
// 3: spread operator is same as Object.assign but with some more steps
// It works fine.
// 4: Custom function will work fine in each sceanrio of deep copy
// function copyOfbject(obj) {
//   let target = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "object" && copyOfbject != null) {
//       target[key] = copyOfbject(obj[key]);
//     } else {
//       target[key] = obj[key];
//     }
//   }
//   return target;
// }
// const obj2 = copyOfbject(obj1);
// obj2.location.country = "Japan";

// console.log(copyOfbject(obj1));
// console.log(copyOfbject(obj2));

// 1: Object.assign: Exmplae how failing deep copy
// const obj2 = Object.assign({}, obj1);

// obj2.location.country = "USA";
// console.log(obj2);
// console.log(obj1);

// 2: JSON.stringify: Exmplae how failing deep copy. Doesn't copy method
// const obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj2);
// console.log(obj1);

//3: spread operator is same as object.assign but with special code it works

const deepClone = {
  ...obj1,
  location: {
    ...obj1.location,
    country: "Canada"
  }
};
console.log(obj1);
console.log(deepClone);
