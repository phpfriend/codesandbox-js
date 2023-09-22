/*
  Given an array ar[N], you have to find no of leaders in arr[]
  Note: arr[i] is said to be leader if it is greater than max elemt of [0, i-1]
  Note: arr[0] is considered as leader
  const arr = [3, 2, 4, 5, 2, 7]
*/

function findLeader(arr) {
  let max = arr[0];
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      count++;
      max = arr[i];
    }
  }
  return count;
}
const arr = [3, 2, 4, 5, 2, 7];
const result = findLeader(arr);
console.log("result>>", result);
