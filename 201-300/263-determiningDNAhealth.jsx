// DNA is a nucleic acid present in the bodies of living things. Each piece of DNA contains a number of genes, some of which are beneficial and increase the DNA's total health. Each gene has a health value, and the total health of a DNA is the sum of the health values of all the beneficial genes that occur as a substring in the DNA. We represent genes and DNA as non-empty strings of lowercase English alphabetic letters, and the same gene may appear multiple times as a susbtring of a DNA.

// Given the following:

// An array of beneficial gene strings, . Note that these gene sequences are not guaranteed to be distinct.
// An array of gene health values, , where each  is the health value for gene .
// A set of  DNA strands where the definition of each strand has three components, , , and , where string  is a DNA for which genes  are healthy.
// Find and print the respective total healths of the unhealthiest (minimum total health) and healthiest (maximum total health) strands of DNA as two space-separated values on a single line.

// Input Format

// The first line contains an integer, , denoting the total number of genes.
// The second line contains  space-separated strings describing the respective values of  (i.e., the elements of ).
// The third line contains  space-separated integers describing the respective values of  (i.e., the elements of ).
// The fourth line contains an integer, , denoting the number of strands of DNA to process.
// Each of the  subsequent lines describes a DNA strand in the form start end d, denoting that the healthy genes for DNA strand  are  and their respective correlated health values are .

// Constraints

//  the sum of the lengths of all genes and DNA strands
// It is guaranteed that each  consists of lowercase English alphabetic letters only (i.e., a to z).
// Output Format

// Print two space-separated integers describing the respective total health of the unhealthiest and the healthiest strands of DNA.

// Sample Input 0

// 6
// a b c aa d b
// 1 2 3 4 5 6
// 3
// 1 5 caaab
// 0 4 xyz
// 2 4 bcdybc
// Sample Output 0

// 0 19
// Explanation 0

// In the diagrams below, the ranges of beneficial genes for a specific DNA on the left are highlighed in green and individual instances of beneficial genes on the right are bolded. The total healths of the  strands are:

// image
// The total health of caaab is .
// image
// The total health of xyz is , because it contains no beneficial genes.
// image
// The total health of bcdybc is .
// The unhealthiest DNA strand is xyz with a total health of , and the healthiest DNA strand is caaab with a total health of . Thus, we print 0 19 as our answer.

//Answer-263
"use strict";

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

function main() {
  const n = parseInt(readLine().trim(), 10);

  // Read genes
  const genes = readLine().replace(/\s+$/g, "").split(" ");

  // Read health values and map them to genes
  const health = readLine().replace(/\s+$/g, "").split(" ").map(Number);
  const geneHealthMap = {};

  for (let i = 0; i < n; i++) {
    // Map gene to health
    if (!geneHealthMap[genes[i]]) {
      geneHealthMap[genes[i]] = 0;
    }
    geneHealthMap[genes[i]] += health[i];
  }

  const s = parseInt(readLine().trim(), 10);
  let minHealth = Infinity;
  let maxHealth = -Infinity;

  for (let i = 0; i < s; i++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
    const start = parseInt(firstMultipleInput[0], 10);
    const end = parseInt(firstMultipleInput[1], 10);
    const d = firstMultipleInput[2];

    // Extract the substring of interest
    const dnaSegment = d.substring(start, end + 1);
    let totalHealth = 0;

    // Check for each gene if it exists in the dnaSegment
    for (const gene in geneHealthMap) {
      let pos = dnaSegment.indexOf(gene);
      while (pos !== -1) {
        totalHealth += geneHealthMap[gene];
        pos = dnaSegment.indexOf(gene, pos + 1);
      }
    }

    // Update min and max health
    minHealth = Math.min(minHealth, totalHealth);
    maxHealth = Math.max(maxHealth, totalHealth);
  }

  // Output the minimum and maximum health
  console.log(`${minHealth} ${maxHealth}`);
}
