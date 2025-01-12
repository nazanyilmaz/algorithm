// Given a set of distinct integers, print the size of a maximal subset of  where the sum of any  numbers in  is not evenly divisible by .

// Example

// One of the arrays that can be created is . Another is . After testing all permutations, the maximum length solution array has  elements.

// Function Description

// Complete the nonDivisibleSubset function in the editor below.

// nonDivisibleSubset has the following parameter(s):

// int S[n]: an array of integers
// int k: the divisor
// Returns

// int: the length of the longest subset of  meeting the criteria
// Input Format

// The first line contains  space-separated integers,  and , the number of values in  and the non factor.
// The second line contains  space-separated integers, each an , the unique values of the set.

// Constraints

// All of the given numbers are distinct.
// Sample Input

// STDIN    Function
// -----    --------
// 4 3      S[] size n = 4, k = 3
// 1 7 2 4  S = [1, 7, 2, 4]
// Sample Output

// 3
// Explanation

// The sums of all permutations of two elements from  are:

// 1 + 7 = 8
// 1 + 2 = 3
// 1 + 4 = 5
// 7 + 2 = 9
// 7 + 4 = 11
// 2 + 4 = 6
// Only  will not ever sum to a multiple of .

//answer-188
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
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */
function nonDivisibleSubset(k, s) {
  let remainderCounts = new Array(k).fill(0);

  // Calculate frequencies of remainders
  s.forEach((value) => {
    remainderCounts[value % k]++;
  });

  let maxSubsetSize = Math.min(remainderCounts[0], 1); // Include at most one element with remainder 0

  // Check pairs of remainders
  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (i === k - i) {
      // Special case where remainders are exactly half of k
      maxSubsetSize += 1;
    } else {
      maxSubsetSize += Math.max(remainderCounts[i], remainderCounts[k - i]);
    }
  }

  return maxSubsetSize;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const s = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((sTemp) => parseInt(sTemp, 10));

  const result = nonDivisibleSubset(k, s);

  ws.write(result + "\n");

  ws.end();
}
