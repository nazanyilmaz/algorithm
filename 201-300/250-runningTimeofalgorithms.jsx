// In a previous challenge you implemented the Insertion Sort algorithm. It is a simple sorting algorithm that works well with small or mostly sorted data. However, it takes a long time to sort large unsorted data. To see why, we will analyze its running time.

// Running Time of Algorithms
// The running time of an algorithm for a specific input depends on the number of operations executed. The greater the number of operations, the longer the running time of an algorithm. We usually want to know how many operations an algorithm will execute in proportion to the size of its input, which we will call .

// What is the ratio of the running time of Insertion Sort to the size of the input? To answer this question, we need to examine the algorithm.

// Analysis of Insertion Sort
// For each element  in an array of  numbers, Insertion Sort compares the number to those to its left until it reaches a lower value element or the start. At that point it shifts everything to the right up one and inserts  into the array.

// How long does all that shifting take?

// In the best case, where the array was already sorted, no element will need to be moved, so the algorithm will just run through the array once and return the sorted array. The running time would be directly proportional to the size of the input, so we can say it will take  time.

// However, we usually focus on the worst-case running time (computer scientists are pretty pessimistic). The worst case for Insertion Sort occurs when the array is in reverse order. To insert each number, the algorithm will have to shift over that number to the beginning of the array. Sorting the entire array of  numbers will therefore take  operations, which is  (almost ). Computer scientists just round that up (pick the dominant term) to  and say that Insertion Sort is an " time" algorithm.

// running-time-picture

// What this means
// The running time of the algorithm against an array of  elements is . For  elements, it will be . Insertion Sort can work well for small inputs or if you know the data is likely to be nearly sorted, like check numbers as they are received by a bank. The running time becomes unreasonable for larger inputs.

// Challenge
// Can you modify your previous Insertion Sort implementation to keep track of the number of shifts it makes while sorting? The only thing you should print is the number of shifts made by the algorithm to completely sort the array. A shift occurs when an element's position changes in the array. Do not shift an element if it is not necessary.

// Function Description

// Complete the runningTime function in the editor below.

// runningTime has the following parameter(s):

// int arr[n]: an array of integers
// Returns

// int: the number of shifts it will take to sort the array
// Input Format

// The first line contains the integer , the number of elements to be sorted.
// The next line contains  integers of .

// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 5           arr[] size n =5
// 2 1 3 1 2   arr = [2, 1, 3, 1, 2]
// Sample Output

// 4
// Explanation

// Iteration   Array      Shifts
// 0           2 1 3 1 2
// 1           1 2 3 1 2     1
// 2           1 2 3 1 2     0
// 3           1 1 2 3 2     2
// 4           1 1 2 2 3     1

// Total                     4

//answer-250
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
 * Complete the 'runningTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function runningTime(arr) {
  let shifts = 0; // Initialize shift counter

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i]; // Current value to be inserted
    let j = i - 1;

    // Shift elements to the right as long as they are greater than the current value
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j]; // Move element to the right
      shifts++; // Count the shift
      j--;
    }

    // Insert the current value in the correct position
    arr[j + 1] = value;
  }

  return shifts; // Return the total number of shifts
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = runningTime(arr);

  ws.write(result + "\n");
  ws.end();
}
