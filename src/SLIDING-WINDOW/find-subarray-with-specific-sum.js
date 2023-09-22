/*

Problem Description
Given an array A of length N. Also given are integers B and C.

Return 1 if there exists a subarray with length B having sum C and 0 otherwise

*/

const A = [4, 3, 2, 6, 1];
const B = 3;
const C = 11;

function checkSubArrayWithSpecificSum(A, B, C) {
  let firstWindowSum = 0;

  for (let i = 0; i < B; i++) {
    firstWindowSum += A[i];
  }

  console.log("firstWindowSum>>", firstWindowSum);

  if (firstWindowSum === C) {
    return 1;
  }

  let start = 1;
  let end = B;

  while (end < A.length) {
    firstWindowSum = firstWindowSum - A[start - 1] + A[end];
    console.log("firstWindowSum123>>", firstWindowSum);
    if (firstWindowSum === C) {
      return 1;
    }
    start++;
    end++;
  }
  return 0;
}

console.log("result>>", checkSubArrayWithSpecificSum(A, B, C));
