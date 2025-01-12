// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

// Note: Here's the set of types of characters in a form you can paste in your solution:

// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"
// Example

// This password is 5 characters long and is missing an uppercase and a special character. The minimum number of characters to add is .

// This password is 5 characters long and has at least one of each character type. The minimum number of characters to add is .

// Function Description

// Complete the minimumNumber function in the editor below.

// minimumNumber has the following parameters:

// int n: the length of the password
// string password: the password to test
// Returns

// int: the minimum number of characters to add
// Input Format

// The first line contains an integer , the length of the password.

// The second line contains the password string. Each character is either a lowercase/uppercase English alphabet, a digit, or a special character.

// Constraints

// All characters in  are in [a-z], [A-Z], [0-9], or [!@#$%^&*()-+ ].
// Sample Input 0

// 3
// Ab1
// Sample Output 0

// 3
// Explanation 0

// She can make the password strong by adding  characters, for example, $hk, turning the password into Ab1$hk which is strong.

//  characters aren't enough since the length must be at least .

// Sample Input 1

// 11
// #HackerRank
// Sample Output 1

// 1
// Explanation 1

// The password isn't strong, but she can make it strong by adding a single digit.

//answer-284
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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */
function minimumNumber(n, password) {
  // Define the sets of characters
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  // Flags to check the presence of each type
  let hasDigit = false;
  let hasLower = false;
  let hasUpper = false;
  let hasSpecial = false;

  // Check the presence of each type of character
  for (let char of password) {
    if (numbers.includes(char)) hasDigit = true;
    if (lower_case.includes(char)) hasLower = true;
    if (upper_case.includes(char)) hasUpper = true;
    if (special_characters.includes(char)) hasSpecial = true;
  }

  // Count the number of missing types
  const missingTypes = [!hasDigit, !hasLower, !hasUpper, !hasSpecial].filter(
    Boolean
  ).length;

  // Calculate how many characters are needed to reach the minimum length
  const lengthRequirement = 6 - n;

  // The number of characters to add is the maximum of missing types and length requirement
  return Math.max(missingTypes, lengthRequirement);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);
  const password = readLine();

  const answer = minimumNumber(n, password);

  ws.write(answer + "\n");
  ws.end();
}
