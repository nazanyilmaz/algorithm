// An English text needs to be encrypted using the following encryption scheme.
// First, the spaces are removed from the text. Let  be the length of this text.
// Then, characters are written into a grid, whose rows and columns have the following constraints:

// Example

// After removing spaces, the string is  characters long.  is between  and , so it is written in the form of a grid with 7 rows and 8 columns.

// ifmanwas
// meanttos
// tayonthe
// groundgo
// dwouldha
// vegivenu
// sroots
// Ensure that
// If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. .
// The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:

// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

// Create a function to encode a message.

// Function Description

// Complete the encryption function in the editor below.

// encryption has the following parameter(s):

// string s: a string to encrypt
// Returns

// string: the encrypted string
// Input Format

// One line of text, the string

// Constraints

//  contains characters in the range ascii[a-z] and space, ascii(32).

// Sample Input

// haveaniceday
// Sample Output 0

// hae and via ecy
// Explanation 0

// ,  is between  and .
// Rewritten with  rows and  columns:

// have
// anic
// eday
// Sample Input 1

// feedthedog
// Sample Output 1

// fto ehg ee dd
// Explanation 1

// ,  is between  and .
// Rewritten with  rows and  columns:

// feed
// thed
// og
// Sample Input 2

// chillout
// Sample Output 2

// clu hlt io
// Explanation 2

// ,  is between  and .
// Rewritten with  columns and  rows ( so we have to use .)

// chi
// llo
// ut

//answer-169
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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function encryption(s) {
  // Remove spaces from the input string
  const cleaned = s.replace(/\s+/g, "");
  const len = cleaned.length;

  // Determine the dimensions of the grid
  const rows = Math.floor(Math.sqrt(len));
  const cols = Math.ceil(Math.sqrt(len));

  // Find the appropriate number of rows and columns
  let r = rows;
  let c = cols;

  if (r * c < len) {
    r = cols;
  }

  // Create the grid
  const grid = [];
  for (let i = 0; i < r; i++) {
    grid.push(cleaned.slice(i * c, i * c + c));
  }

  // Create the encrypted message by reading columns
  const encoded = [];
  for (let j = 0; j < c; j++) {
    let column = "";
    for (let i = 0; i < r; i++) {
      if (grid[i][j]) {
        column += grid[i][j];
      }
    }
    encoded.push(column);
  }

  // Join columns with spaces to form the final result
  return encoded.join(" ");
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = encryption(s);

  ws.write(result + "\n");

  ws.end();
}
