// We define a magic square to be an  matrix of distinct positive integers from  to  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

// You will be given a  matrix  of integers in the inclusive range . We can convert any digit  to any other digit  in the range  at cost of . Given , convert it into a magic square at minimal cost. Print this cost on a new line.

// Note: The resulting magic square must contain distinct integers in the inclusive range .

// Example

// $s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

// The matrix looks like this:

// 5 3 4
// 1 5 8
// 6 4 2
// We can convert it to the following magic square:

// 8 3 4
// 1 5 9
// 6 7 2
// This took three replacements at a cost of .

// Function Description

// Complete the formingMagicSquare function in the editor below.

// formingMagicSquare has the following parameter(s):

// int s[3][3]: a  array of integers
// Returns

// int: the minimal total cost of converting the input square to a magic square
// Input Format

// Each of the  lines contains three space-separated integers of row .

// Constraints

// Sample Input 0

// 4 9 2
// 3 5 7
// 8 1 5
// Sample Output 0

// 1
// Explanation 0

// If we change the bottom right value, , from  to  at a cost of ,  becomes a magic square at the minimum possible cost.

// Sample Input 1

// 4 8 2
// 4 5 7
// 6 1 6
// Sample Output 1

// 4
// Explanation 1

// Using 0-based indexing, if we make

// -> at a cost of
// -> at a cost of
// -> at a cost of ,
// then the total cost will be .

//answer-175
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
  // List of all possible 3x3 magic squares
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Infinity;

  for (const magic of magicSquares) {
    let cost = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cost += Math.abs(s[i][j] - magic[i][j]);
      }
    }
    if (cost < minCost) {
      minCost = cost;
    }
  }

  return minCost;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let s = Array(3);

  for (let i = 0; i < 3; i++) {
    s[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((sTemp) => parseInt(sTemp, 10));
  }

  const result = formingMagicSquare(s);

  ws.write(result + "\n");

  ws.end();
}
