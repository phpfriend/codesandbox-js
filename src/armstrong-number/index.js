/*
Problem Description

You are given an integer N you need to print all the Armstrong Numbers between 1 to N.
(N inclusive).

An
Armstrong number
is a number such that when each individual digit of the number is raised 
to the power of the number of digits in the number and then added up, 
they are equal to the original number itself.
For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 ).

Note: All the integers N given as input in this problem are limited to three digits.


Problem Constraints

1 <= N <= 500

Input Format

First and only line of input contains an integer N.

Output Format

Output all the Armstrong numbers in range [1,N] each in a new line.

Example Input

Input 1:5
Input 2:200


Example Output
Output 1:
1
Output 2:
1
153


Example Explanation

Explanation 1:

1 is an armstrong number.
Explanation 2:
1 and 153 are armstrong number under 200.
*/

let value = 5;

// value = value / 10;
//console.log("value:" + parseInt(value, 10));

// digit = value % 10;
// console.log("value:" + value);

for (let i = 1; i < value; i++) {
  let value = i;
  let digit = 0;
  let sum = 0;
  let cube = 0;

  while (value > 0) {
    digit = value % 10;
    cube = digit * digit * digit;
    sum = sum + cube;
    value = parseInt(value / 10, 10);
  }
  if (sum === i) {
    console.log(i);
  }
}
