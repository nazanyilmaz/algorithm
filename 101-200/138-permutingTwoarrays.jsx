// There are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where .

// There will be  queries consisting of , , and . For each query, return YES if some permutation ,  satisfying the relation exists. Otherwise, return NO.

// Example

// A valid  is  and :  and . Return YES.

// Function Description

// Complete the twoArrays function in the editor below. It should return a string, either YES or NO.

// twoArrays has the following parameter(s):

// int k: an integer
// int A[n]: an array of integers
// int B[n]: an array of integers
// Returns
// - string: either YES or NO

// Input Format

// The first line contains an integer , the number of queries.

// The next  sets of  lines are as follows:

// The first line contains two space-separated integers  and , the size of both arrays  and , and the relation variable.
// The second line contains  space-separated integers .
// The third line contains  space-separated integers .
// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 2           q = 2
// 3 10        A[] and B[] size n = 3, k = 10
// 2 1 3       A = [2, 1, 3]
// 7 8 9       B = [7, 8, 9]
// 4 5         A[] and B[] size n = 4, k = 5
// 1 2 2 1     A = [1, 2, 2, 1]
// 3 3 3 4     B = [3, 3, 3, 4]
// Sample Output

// YES
// NO
// Explanation

// There are two queries:

// Permute these into  and  so that the following statements are true:

// , , and . To permute  and  into a valid  and , there must be at least three numbers in  that are greater than .

//answer-138
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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */
function twoArrays(k, A, B) {
  // Sort A in ascending order and B in descending order
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  // Check if A[i] + B[i] >= k for all i
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);

    const A = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((ATemp) => parseInt(ATemp, 10));
    const B = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((BTemp) => parseInt(BTemp, 10));

    const result = twoArrays(k, A, B);
    ws.write(result + "\n");
  }

  ws.end();
}
