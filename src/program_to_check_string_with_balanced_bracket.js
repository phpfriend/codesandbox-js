const isValid = (str) => {
  const s = str.replace(/\s+/g, "");
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
  ]);

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

let str1 = " ( {} [] ( {} )) ";
let str2 = " }} ";
console.log(isValid(str1));
console.log(isValid(str2));
