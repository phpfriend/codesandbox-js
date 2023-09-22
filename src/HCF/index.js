/*
Problem Description
Write a program to input two integers A & B from user and print their HCF.

Definition Of HCF: The HCF(Highest Common Factor) or the GCD(greatest common divisor) of two positive integers happens to be the largest positive integer that divides the numbers without leaving a remainder.



Problem Constraints
1 <= A,B <= 100000



Input Format
Only line which contain two integers A &B.



Output Format
An integer which is the HCF of A & B.



Example Input
Input 1:

15 105 
Input 2:

24 36 


Example Output
Output 1:

15
Output 2:

12




*/

let a = 5;
let b = 10;

let value = a < b ? a : b;
let hcf = 0;
for (let i = 1; i <= value; i++) {
  if (a % i === 0 && b % i === 0) {
    hcf = i;
  }
  console.log("HCF:" + hcf);
}
