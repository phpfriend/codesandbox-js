/*
Problem Description
Given an integer N as input, print the corresponding pattern for N.

For example if N = 5 then pattern will be like:

1
1_
1_3
1_3_
1_3_5

Note : Here '_' represents space for explanation purpose only. You have to print space in your code.
*/

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let printItem = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       printItem = printItem + "_";
//     } else {
//       printItem = printItem + j;
//     }
//   }
//   console.log(printItem);
// }
/*

2) Problem Description
Given an integer N as input, print the corresponding pattern for N.

For example if N = 5 then pattern will be like:

*   *
*   *
*   *
*   *
*   *
Note : Here there are N-2 blank spaces between the stars in 
each line. You have to print space in your code.
*/

// let n = 5;
// for (let row = 1; row <= n; row++) {
//   let printItem = "";
//   printItem = printItem + "*";

//   for (let j = 0; j < n - 2; j++) {
//     printItem = printItem + " ";
//   }
//   printItem = printItem + "*";
//   console.log(printItem);
//   console.log();
// }

/*
Problem Description
Given an integer N as input, print the corresponding pattern for N.
For example if N = 5 then pattern will be like:

____*
___**
__***
_****
*****

Note : Here '_' represents space for explanation purpose only. 
You have to print space in your code.
*/

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let printItem = "";
//   for (let j = 1; j <= n - i; j++) {
//     printItem = printItem + " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     printItem = printItem + "*";
//   }
//   console.log(printItem);
// }

/*
Problem Description

Given an integer N as input, print the corresponding Numeric 
Inverted Half Pyramid pattern for N.

For example if N = 4 then pattern will be like:

1 2 3 4
1 2 3
1 2
1
*/

let n = 4;
for (let row = 0; row < n; row++) {
  let printItem = "";
  for (let col = 1; col <= n - row; col++) {
    printItem = printItem + col + " ";
  }
  console.log(printItem);
}
