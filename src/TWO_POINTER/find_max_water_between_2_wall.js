/*
 Given ar[n], ar[i] represents height of each wall, 
 fine max water accumulated between any 2 walls
 1. Between 2 adjacent wall width is 1.
 2. While calculating water between any two walls, 
 neglect all wals between them and then calculate water between them.
 ar[5] = {3, 7, 5, 4,2}
*/

function calculateMaxWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let ans = 0;

  while (left < right) {
    const minHeight = Math.min(arr[left], arr[right]);
    const width = right - left;
    const area = minHeight * width;
    ans = Math.max(ans, area);
    if (arr[left] > arr[right]) {
      right--;
    } else {
      left++;
    }
  }
  return ans;
}

const arr = [3, 7, 5, 4, 2];

console.log("maximum water contained>>", calculateMaxWater(arr));
