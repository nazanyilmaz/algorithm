// You are given a tree (a simple connected graph with no cycles).

// Find the maximum number of edges you can remove from the tree to get a forest such that each connected component of the forest contains an even number of nodes.

// As an example, the following tree with  nodes can be cut at most  time to create an even forest.

// image

// Function Description

// Complete the evenForest function in the editor below. It should return an integer as described.

// evenForest has the following parameter(s):

// t_nodes: the number of nodes in the tree
// t_edges: the number of undirected edges in the tree
// t_from: start nodes for each edge
// t_to: end nodes for each edge, (Match by index to t_from.)
// Input Format

// The first line of input contains two integers  and , the number of nodes and edges.
// The next  lines contain two integers  and  which specify nodes connected by an edge of the tree. The root of the tree is node .

// Constraints

// Note: The tree in the input will be such that it can always be decomposed into components containing an even number of nodes.  is the set of positive even integers.

// Output Format

// Print the number of removed edges.

// Sample Input 1

// CopyDownload
// Undirected Graph: t
// 2
// 1
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 10 9
// 2 1
// 3 1
// 4 3
// 5 2
// 6 1
// 7 2
// 8 6
// 9 8
// 10 8
// Sample Output 1

// 2
// Explanation 1

// Remove edges  and  to get the desired result.

// image image

// No more edges can be removed.

//answer-94
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

// Complete the evenForest function below.
function evenForest(t_nodes, t_edges, t_from, t_to) {
  // Create adjacency list for the tree
  const tree = Array.from({ length: t_nodes + 1 }, () => []);
  for (let i = 0; i < t_edges; i++) {
    tree[t_from[i]].push(t_to[i]);
    tree[t_to[i]].push(t_from[i]);
  }

  let removableEdges = 0;

  // DFS function to calculate the size of each subtree
  function dfs(node, parent) {
    let subtreeSize = 1; // Count this node

    for (const neighbor of tree[node]) {
      if (neighbor === parent) continue; // Avoid going back to parent
      const size = dfs(neighbor, node);
      if (size % 2 === 0) {
        removableEdges++; // We can remove this edge
      }
      subtreeSize += size; // Include this subtree size
    }

    return subtreeSize;
  }

  // Start DFS from the root (1 in this case)
  dfs(1, -1);

  return removableEdges;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tNodesEdges = readLine().split(" ");

  const tNodes = parseInt(tNodesEdges[0], 10);
  const tEdges = parseInt(tNodesEdges[1], 10);

  let tFrom = [];
  let tTo = [];

  for (let i = 0; i < tEdges; i++) {
    const tFromTo = readLine().split(" ");

    tFrom.push(parseInt(tFromTo[0], 10));
    tTo.push(parseInt(tFromTo[1], 10));
  }

  const res = evenForest(tNodes, tEdges, tFrom, tTo);

  ws.write(res + "\n");
  ws.end();
}
