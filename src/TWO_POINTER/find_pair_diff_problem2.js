/*
  Given arr[n] sorted elements check if there exists a pair(i,j)
  such that arr[i]-arr[j] =k && i!=j 77 k>=0

*/

function hasPairWithDifference(arr, target) {
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    const currentDifference = arr[right] - arr[left];
    if (currentDifference === target && left !== right) {
      return true;
    } else if (currentDifference > target) {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      right++;
    }
  }
  return false;
}
const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const targetDifference = 3;
const result = hasPairWithDifference(sortedArray, targetDifference);
console.log("result>>", result);
