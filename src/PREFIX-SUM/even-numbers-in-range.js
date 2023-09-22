/*
Problem Description
You are given an array A of length N and Q queries given by the 2D array B of 
size Q×2. Each query consists of two integers B[i][0] and B[i][1].
For every query, your task is to find the count of even numbers in 
the range from A[B[i][0]] to A[B[i][1]].

Problem Constraints
1 <= N <= 105
1 <= Q <= 105
1 <= A[i] <= 109
0 <= B[i][0] <= B[i][1] < N

Input Format
First argument A is an array of integers.
Second argument B is a 2D array of integers.
Output Format
Return an array of integers.

Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [   [0, 2] 
        [2, 4]
        [1, 4]   ]

*/

function findEvenNumberInRange(arr, B) {
  let evenNumber = [];
  let pf = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumber[i] = 1;
    } else {
      evenNumber[i] = 0;
    }
  }
  pf[0] = evenNumber[0];
  for (let i = 1; i < arr.length; i++) {
    pf[i] = pf[i - 1] + evenNumber[i];
  }

  console.log("pf", pf);

  for (let i = 0; i < B.length; i++) {
    const start = B[i][0];
    const end = B[i][1];
    if (start === 0) {
      result.push(pf[end]);
    } else {
      result.push(pf[end] - pf[start - 1]);
    }
  }
  return result;
}
const arr = [1, 2, 3, 4, 5];
const B = [
  [0, 2],
  [2, 4],
  [1, 4]
];
console.log("Result>>>>", findEvenNumberInRange(arr, B));
