// Two words are anagrams of one another if their letters can be rearranged to form the other word.

// Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

// Example

// Break  into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous and their lengths are equal. Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.

// Function Description

// Complete the anagram function in the editor below.

// anagram has the following parameter(s):

// string s: a string
// Returns

// int: the minimum number of characters to change or -1.
// Input Format

// The first line will contain an integer, , the number of test cases.
// Each test case will contain a string .

// Constraints

//  consists only of characters in the range ascii[a-z].
// Sample Input

// 6
// aaabbb
// ab
// abc
// mnop
// xyyx
// xaxbbbxx
// Sample Output

// 3
// 1
// -1
// 2
// 0
// 1
// Explanation

// Test Case #01: We split  into two strings ='aaa' and ='bbb'. We have to replace all three characters from the first string with 'b' to make the strings anagrams.

// Test Case #02: You have to replace 'a' with 'b', which will generate "bb".

// Test Case #03: It is not possible for two strings of unequal length to be anagrams of one another.

// Test Case #04: We have to replace both the characters of first string ("mn") to make it an anagram of the other one.

// Test Case #05:  and  are already anagrams of one another.

// Test Case #06: Here S1 = "xaxb" and S2 = "bbxx". You must replace 'a' from S1 with 'b' so that S1 = "xbxb".

//answer-252
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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function anagram(s) {
  const n = s.length;

  // Check if the length of the string is odd
  if (n % 2 !== 0) {
    return -1;
  }

  // Split the string into two equal parts
  const half = n / 2;
  const s1 = s.slice(0, half);
  const s2 = s.slice(half);

  // Count character frequencies in both substrings
  const count1 = Array(26).fill(0);
  const count2 = Array(26).fill(0);

  for (const char of s1) {
    count1[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (const char of s2) {
    count2[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // Calculate the number of changes required
  let changes = 0;
  for (let i = 0; i < 26; i++) {
    if (count1[i] > count2[i]) {
      changes += count1[i] - count2[i];
    }
  }

  return changes;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine().trim();

    const result = anagram(s);

    ws.write(result + "\n");
  }

  ws.end();
}
