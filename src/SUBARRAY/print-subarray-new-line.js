/*

Pint all subarray in new line

arr = [2, 8, -1, 4]

*/

const arr = [2, 8, -1, 4];
let str;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    str = "";
    for (let k = i; k <= j; k++) {
      str += " " + arr[k];
    }
    console.log(str);
  }
}
