/*

Given an array of integers A and an integer B, find and return 
the minimum number of swaps required to bring all the numbers 
less than or equal to B together.

Note: It is possible to swap any two elements, 
not necessarily consecutive.

A = [1, 12, 10, 3, 14, 10, 5]
 B = 8

*/

const A = [1, 12, 10, 3, 14, 10, 5];
const B = 8;

function findMinimumSwap(A, B) {
  let subArrayLength = 0;
  let ans = Number.MAX_VALUE;
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= B) {
      subArrayLength++;
    }
  }

  let start = 0;
  let end = subArrayLength;
  let minimumSwap = 0;

  while (end < A.length) {
    minimumSwap = 0;
    for (let j = start; j <= end; j++) {
      if (A[j] <= B) {
        minimumSwap++;
      }
    }

    ans = Math.min(ans, minimumSwap);
    start++;
    end++;
  }

  return minimumSwap;
}

console.log("result>>>", findMinimumSwap(A, B));
