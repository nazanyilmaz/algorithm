// Here's a humerus joke:

// Why did Papyrus the skeleton go to the store by himself? Because he had no body to go with him!

// Did you like it? Don't worry, I've got a ton more. A skele-ton.

// Once upon a time, Papyrus the skeleton went to buy some pasta from the store. The store's inventory is bare-bones and they only sell one thing — boxes of uncooked spaghetti! The store always stocks exactly  boxes of pasta, and each box is numbered sequentially from  to . This box number also corresponds to the number of sticks of spaghetti in the box, meaning the first box contains  stick, the second box contains  sticks, the third box contains  sticks, …, and the  box contains  sticks. Because they only stock one box of each kind, the store has a tendon-cy to sell out of spaghetti.

// During each trip to the store, Papyrus likes to buy exactly  sticks of spaghetti by purchasing exactly  boxes (no more, no less). Not sure which boxes to purchase, Papyrus calls Sherlock Bones for help but he's also stumped! Do you have the guts to solve this puzzle?

// Given the values of , , and  for  trips to the store, determine which boxes Papyrus must purchase during each trip. For each trip, print a single line of  distinct space-separated integers denoting the box number for each box of spaghetti Papyrus purchases (recall that the store only has one box of each kind). If it's not possible to buy  sticks of spaghetti by purchasing  boxes, print -1 instead.

// For example, Papyrus wants to purchase  sticks of spaghetti in  boxes and the store has  different box sizes. He can buy boxes of sizes , ,  and other combinations. Any of the combinations will work.

// Function Description

// Complete the bonetrousle function in the editor below. It should return an array of integers.

// bonetrousle has the following parameter(s):

// n: the integer number of sticks to buy
// k: the integer number of box sizes the store carries
// b: the integer number of boxes to buy
// Input Format

// The first line contains a single integer , the number of trips to the store.
// Each of the next  lines contains three space-separated integers ,  and , the number of sticks to buy, the number of boxes for sale and the number of boxes to buy on this trip to the store.

// Constraints

// Output Format

// For each trip to the store:

// If there is no solution, print -1 on a new line.
// If there is a solution, print a single line of  distinct space-separated integers where each integer denotes the numbers of noodles in each box that Papyrus must purchase.
// If there are multiple possible solutions, you can print any one of them. Do not print any leading or trailing spaces or extra newlines.

// Sample Input

// 4
// 12 8 3
// 10 3 3
// 9 10 2
// 9 10 2
// Sample Output

// 2 3 7
// -1
// 5 4
// 1 8
// Explanation

// Papyrus makes the following trips to the store:

// He wants to buy exactly  boxes of spaghetti and have a total number of  sticks. During this trip, the store has  boxes of spaghetti sticks where the first box has  stick, the second box has  sticks, the third box has  sticks, and so on. One possible solution would be the following:

// Homemade noodles are the best!
// BUT I JUST BUY STORE-BRAND! THEY'RE THE CHEAPEST!!! NGAHHHHHHHHHHHHHHHHHHH!!!
// Papyrus can buy the -stick, -stick, and -stick boxes for the total of  sticks. Note that this is not the only valid solution; other valid solutions are acceptable.

// He wants to buy exactly  boxes of spaghetti and have a total number of  sticks. Because the store only has three boxes in stock containing , , and  sticks of spaghetti, it's not possible for Papyrus to buy  sticks of spaghetti as buying all three boxes would only yield  sticks (which is less than the  that he wanted to purchase). Thus, we print -1 on a new line.
// The third and fourth trips to the store both contain the same values (, , ). This illustrates that there may be multiple solutions for any given trip to the store and any valid solution is acceptable.

//Answer-16

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
 * Complete the 'bonetrousle' function below.
 *
 * The function is expected to return an ARRAY of integers.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonetrousle(n, k, b) {
  // Calculate the minimum sum needed to buy b boxes
  const minRequired = (b * (b + 1)) / 2;
  // Calculate the maximum possible sum with the largest b boxes
  const maxPossible = (b * (k + (k - b + 1))) / 2;

  // If the required total is not possible
  if (n < minRequired || n > maxPossible) {
    return [-1];
  }

  // Start with the largest b boxes
  const boxes = [];
  for (let i = k; i > k - b; i--) {
    boxes.push(i);
  }

  let currentSum = boxes.reduce((a, b) => a + b, 0);
  let difference = currentSum - n;

  // Adjust boxes from the largest down to meet the target sum
  for (let i = 0; i < b && difference > 0; i++) {
    const maxDecrease = boxes[i] - (i + 1); // Ensure boxes stay distinct
    const decrease = Math.min(difference, maxDecrease);
    boxes[i] -= decrease;
    difference -= decrease;
  }

  return boxes.sort((a, b) => a - b); // Sort the result for output
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);
    const k = parseInt(firstMultipleInput[1], 10);
    const b = parseInt(firstMultipleInput[2], 10);

    const result = bonetrousle(n, k, b);

    if (result[0] === -1) {
      ws.write("-1\n");
    } else {
      ws.write(result.join(" ") + "\n");
    }
  }

  ws.end();
}
