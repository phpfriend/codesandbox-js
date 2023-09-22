// remove duplicate from string
// Solution 1
/*let str = "abcabd";

let strArr = str.split("");
let result = {};

for(let i=0; i<str.length; i++){
  let count = 0;
   if(Object.keys(result).includes(strArr[i])){
    count++
   }
   result[strArr[i]] = count;
}

let finalString = "";
for(let k in result){
  finalString = finalString+k;
}
console.log(finalString);
*/

// Solution 2
/*let str = "abcabd";
let strArr = str.split("");
let strResult = strArr[0];

for (let i = 0; i < str.length; i++) {
  if (strResult.indexOf(str[i]) < 0) {
    strResult += str[i];
  }
}
console.log(strResult);
*/

// Solution 3
let str = "abcabd";

// let strArr = str.split("");
let result = new Set();

for (let i = 0; i < str.length; i++) {
  result.add(str[i]);
}
let finalResult = "";

result.forEach((val) => {
  finalResult += val;
});
console.log(finalResult);
