/*
  Given ar[n] distinct sorted elements check if there exist a pair(i, j) such 
  that ar[i]+ar[j] = k and i!=j;
*/

function hasPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return true;
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const targetSum = 14;
const result = hasPairWithSum(sortedArray, targetSum);
console.log("result>>>" + result);
