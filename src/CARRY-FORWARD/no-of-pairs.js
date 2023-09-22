/*

Given a char array ch[n], calculate no of pairs index {i, j}
such that i<j && ch[i] == 'a' && ch[j] == 'g'
all character are lowercase

*/

function calculatePairs(ch) {
  let length = ch.length;
  let count = 0;
  let ans = 0;

  for (let i = length - 1; i >= 0; i--) {
    if (ch[i] === "g") {
      count++;
    }
    if (ch[i] === "a") {
      ans = ans + count;
    }
  }
  return ans;
}

const ch = ["b", "a", "a", "g", "d", "c", "g"];

console.log("calculate result>>", calculatePairs(ch));
