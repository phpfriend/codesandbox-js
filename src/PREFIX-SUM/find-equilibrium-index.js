/*
Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.


Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105

A = [-7, 1, 5, 2, -4, 3, 0]
pf = [-7, -6, -1, 1, -3, 0, 0]
*/

function findEquilibriumIndex(arr) {
  let pf = [];
  pf.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    pf.push(pf[i - 1] + arr[i]);
  }
  console.log(pf);
  if (pf[arr.length - 1] - pf[0] === 0) {
    return 0;
  }

  for (let i = 1; i < arr.length; i++) {
    if (pf[i - 1] === pf[arr.length - 1] - pf[i]) {
      return i;
    }
  }
  return -1;
}
const arr = [-7, 1, 5, 2, -4, 3, 0];
console.log("Result >>>>", findEquilibriumIndex(arr));
