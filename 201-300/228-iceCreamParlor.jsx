// Two friends like to pool their money and go to the ice cream parlor. They always choose two distinct flavors and they spend all of their money.

// Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

// Example.

// The two flavors that cost  and  meet the criteria. Using -based indexing, they are at indices  and .

// Function Description

// Complete the icecreamParlor function in the editor below.

// icecreamParlor has the following parameter(s):

// int m: the amount of money they have to spend
// int cost[n]: the cost of each flavor of ice cream
// Returns

// int[2]: the indices of the prices of the two flavors they buy, sorted ascending
// Input Format

// The first line contains an integer, , the number of trips to the ice cream parlor. The next  sets of lines each describe a visit.

// Each trip is described as follows:

// The integer , the amount of money they have pooled.
// The integer , the number of flavors offered at the time.
//  space-separated integers denoting the cost of each flavor: .
// Note: The index within the cost array represents the flavor of the ice cream purchased.

// Constraints

// , ∀
// There will always be a unique solution.
// Sample Input

// STDIN       Function
// -----       --------
// 2           t = 2
// 4           k = 4
// 5           cost[] size n = 5
// 1 4 5 3 2   cost = [1, 4, 5, 3, 2]
// 4           k = 4
// 4           cost[] size n = 4
// 2 2 4 3     cost=[2, 2,4, 3]
// Sample Output

// 1 4
// 1 2
// Explanation

// Sunny and Johnny make the following two trips to the parlor:

// The first time, they pool together  dollars. Of the five flavors available that day, flavors  and  have a total cost of .
// The second time, they pool together  dollars. Of the four flavors available that day, flavors  and  have a total cost of .

//answer-228
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
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */
function icecreamParlor(m, arr) {
  const flavorMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const cost = arr[i];
    const complement = m - cost;

    if (flavorMap.has(complement)) {
      return [flavorMap.get(complement) + 1, i + 1];
    }

    flavorMap.set(cost, i);
  }

  // Should never reach here because there is always a unique solution.
  return [];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const m = parseInt(readLine().trim(), 10);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));

    const result = icecreamParlor(m, arr);

    ws.write(result.join(" ") + "\n");
  }

  ws.end();
}
