/*

Given 3 sorted arrays A[], B[], c[] of size N. FInd min value of below
expression (max(A[i], B[j], C[k]) -min(A[i], B[j], c[k]);
A[]={7, 14, 24}
B[]={10, 23, 30},
c[] = {2, 15, 26}
*/

function findExpressionValue(A, B, C) {
  let i = 0;
  let j = 0;
  let k = 0;
  let ans = Infinity; // Initialize with a large value
  const length = A.length;
  console.log(length);
  while (i < length && j < length && k < length) {
    const minValue = Math.min(A[i], B[j], C[k]);
    const maxValue = Math.max(A[i], B[j], C[k]);
    const value = maxValue - minValue;
    console.log("value>>", value);

    ans = Math.min(ans, value);

    if (A[i] === minValue) {
      i++;
    } else if (B[j] === minValue) {
      j++;
    } else {
      k++;
    }
  }
  return ans;
}

const A = [7, 14, 24];
const B = [10, 23, 30];
const C = [2, 15, 26];

console.log("result>>", findExpressionValue(A, B, C));
