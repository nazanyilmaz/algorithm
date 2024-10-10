// A numeric string, , is beautiful if it can be split into a sequence of two or more positive integers, , satisfying the following conditions:

//  for any  (i.e., each element in the sequence is  more than the previous element).
// No  contains a leading zero. For example, we can split  into the sequence , but it is not beautiful because  and  have leading zeroes.
// The contents of the sequence cannot be rearranged. For example, we can split  into the sequence , but it is not beautiful because it breaks our first constraint (i.e., ).
// The diagram below depicts some beautiful strings:

// image

// Perform  queries where each query consists of some integer string . For each query, print whether or not the string is beautiful on a new line. If it is beautiful, print YES x, where  is the first number of the increasing sequence. If there are multiple such values of , choose the smallest. Otherwise, print NO.

// Function Description

// Complete the separateNumbers function in the editor below.

// separateNumbers has the following parameter:

// s: an integer value represented as a string
// Prints
// - string: Print a string as described above. Return nothing.

// Input Format

// The first line contains an integer , the number of strings to evaluate.
// Each of the next  lines contains an integer string  to query.

// Constraints

// Sample Input 0

// 7
// 1234
// 91011
// 99100
// 101103
// 010203
// 13
// 1
// Sample Output 0

// YES 1
// YES 9
// YES 99
// NO
// NO
// NO
// NO
// Explanation 0

// The first three numbers are beautiful (see the diagram above). The remaining numbers are not beautiful:

// For , all possible splits violate the first and/or second conditions.
// For , it starts with a zero so all possible splits violate the second condition.
// For , the only possible split is , which violates the first condition.
// For , there are no possible splits because  only has one digit.
// Sample Input 1

// 4
// 99910001001
// 7891011
// 9899100
// 999100010001
// Sample Output 1

// YES 999
// YES 7
// YES 98
// NO

//answer-278
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
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */
function separateNumbers(s) {
  const len = s.length;

  // Check all possible lengths for the initial number
  for (let i = 1; i <= Math.floor(len / 2); i++) {
    let startNumber = s.slice(0, i);

    // Skip if start number has leading zero and is more than one digit
    if (startNumber[0] === "0" && startNumber.length > 1) {
      continue;
    }

    let sequence = "";
    let num = BigInt(startNumber); // Use BigInt to handle large numbers

    // Generate the expected sequence
    while (sequence.length < len) {
      sequence += num.toString();
      num++;
    }

    if (sequence === s) {
      console.log(`YES ${startNumber}`);
      return; // Found a beautiful number, exit the function
    }
  }

  console.log("NO"); // No beautiful number found
}

function main() {
  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine().trim();
    separateNumbers(s);
  }
}
