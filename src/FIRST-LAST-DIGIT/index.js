/*
Write a program to input T numbers(N) from user and 
print first and last digits of the given numbers.
*/

let number = 56789;

for (let i = 0; number > 0; i++) {
  let firstDigit = 0;
  let lastDigit = number % 10;

  while (number > 0) {
    firstDigit = number % 10;
    number = parseInt(number / 10, 10);
  }

  console.log("First Digit:" + firstDigit);
  console.log("Last Digit:" + lastDigit);
}
