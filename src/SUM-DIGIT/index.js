/*
Mr. Q has a diary in which a lot of numbers are written. 
He wants to know the sum of digits for every number. 
First Ask Mr. Q about the numbers written in the diary 
and then write a code to find the sum of digits 
for every number.

*/

let number = 3456;
let sum = 0;
let digit = 0;
for (let i = 0; number > 0; i++) {
  digit = number % 10;
  sum = sum + digit;
  number = parseInt(number / 10, 10);
}

console.log("Sum of all digits:" + sum);
