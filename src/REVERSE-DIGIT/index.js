let number = 7896542;

let rev = 0;

for (let i = 0; number > 0; i++) {
  const digit = number % 10;
  rev = rev * 10 + digit;
  number = parseInt(number / 10, 10);
}

console.log("Reversed Digit:" + rev);
