/*
Spiral Order Matrix II

Problem Description
Given an integer A, generate a square matrix 
filled with elements from 1 to A2 in spiral 
order and return the generated square matrix.
*/

const A = 5;

function printSprialMatrix(A) {
  const arr = new Array(A);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(A);
  }
  let x = 1;
  let tr = 0,
    br = arr.length - 1,
    lc = 0,
    rc = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = 0;
    }
  }

  /*console.log("lc", lc);
  console.log("rc", rc);
  console.log("tr", tr);
  console.log("br", br);
  console.log("x", x);
  console.log("AA", A * A);*/

  while (x <= A * A) {
    // left to right
    for (let i = lc; i <= rc; i++) {
      arr[tr][i] = x;
      x++;
    }
    tr++;
    console.log(arr);
    // right top to bottom
    for (let i = tr; i <= br; i++) {
      arr[i][rc] = x;
      x++;
    }
    // console.log(arr[rc]);
    rc--;
    // right to left column
    for (let i = rc; i >= lc; i--) {
      arr[br][i] = x;
      x++;
    }
    br--;
    // bottom to up row
    for (let i = br; i >= tr; i--) {
      arr[i][lc] = x;
      x++;
    }
    lc++;
  }
  return arr;
}

console.log("result>>>", printSprialMatrix(A));
