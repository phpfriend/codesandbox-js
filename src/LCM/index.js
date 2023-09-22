/*
  Problem Description
Implement a program that takes two positive integers 
A and B in the input and prints their LCM.

Definition of LCM : The Least Common Multiple 
or LCM of two numbers say A and B, is denoted as 
LCM (A,B). And the LCM is the smallest 
or least positive integer that is divisible 
by both A and B.

Problem Constraints
1 <= A,B <= 200

Input Format
Two space separated integers A and B in the input.

Output Format
Output a single integer that is the LCM of A and B.

Example Input
Input 1:
5 10
Input 2:

2 3

Example Output
Output 1:
10
Output 2:
6
Example Explanation
Explanation 1:
LCM(5,10)=10
Explanation 2:

LCM(2,3)=6
*/

let a = 6;
let b = 9;

let lcm = 0;

lcm = a > b ? a : b;

while (true) {
  if (lcm % a === 0 && lcm % b === 0) {
    console.log("LCM:" + lcm);
    break;
  }
  ++lcm;
}
