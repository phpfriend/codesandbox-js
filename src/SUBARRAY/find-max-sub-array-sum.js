/*
You are given an integer array C of size A. Now you need to find a 
subarray (contiguous elements) so that the sum of contiguous elements is maximum.
But the sum must not exceed B.
A = 5
B = 12
C = [2, 1, 3, 4, 5]
*/

/*const A = 5;
const B = 12;
const C = [2, 1, 3, 4, 5];*/

const A = 3;
const B = 1;
const C = [2, 2, 2];

function findMaxSubArraySum(A, B, C) {
  let ans = 0;
  let sum;
  for (let i = 0; i < A; i++) {
    sum = 0;
    for (let j = i; j < A; j++) {
      sum += C[j];
    }
    if (sum <= B && sum > ans) {
      ans = sum;
    }
  }
  return ans;
}

console.log("Result>>", findMaxSubArraySum(A, B, C));
