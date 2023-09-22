function checkPalindrome(str) {
  // let s = str.split("");
  // let reversedstring = s.reverse().join("");
  // if (str !== reversedstring) {
  //   return "Not a Palindrome";
  // }
  // return "Palindrome";
  let length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return "No Palindrome";
    }
  }
  return "palindrome";
}

console.log(checkPalindrome("aba"));
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("sdsad"));
