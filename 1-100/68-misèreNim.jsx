// Two people are playing game of Misère Nim. The basic rules for this game are as follows:

// The game starts with  piles of stones indexed from  to . Each pile  (where ) has  stones.
// The players move in alternating turns. During each move, the current player must remove one or more stones from a single pile.
// The player who removes the last stone loses the game.
// Given the value of  and the number of stones in each pile, determine whether the person who wins the game is the first or second person to move. If the first player to move wins, print First on a new line; otherwise, print Second. Assume both players move optimally.

// Example

// In this case, player 1 picks a pile, player 2 picks a pile and player 1 has to choose the last pile. Player 2 wins so return Second.


// There is no permutation of optimal moves where player 2 wins. For example, player 1 chooses the first pile. If player 2 chooses 1 from another pile, player 1 will choose the pile with 2 left. If player 2 chooses a pile of 2, player 1 chooses 1 from the remaining pile leaving the last stone for player 2. Return First.

// Function Description

// Complete the misereNim function in the editor below.

// misereNim has the following parameters:

// int s[n]: the number of stones in each pile
// Returns

// string: either First or Second
// Input Format

// The first line contains an integer, , the number of test cases.
// Each test case is described over two lines:

// An integer, , the number of piles.
//  space-separated integers, , that describe the number of stones at pile .
// Constraints

// Sample Input

// STDIN   Function
// -----   --------
// 2       T = 2
// 2       s[] size n = 2
// 1 1     s = [1, 1]
// 3       s[] size n = 3
// 2 1 3   s = [2, 1, 3]
// Sample Output

// First
// Second
// Explanation

// In the first testcase, the first player removes 1 stone from the first pile and then the second player has no moves other than removing the only stone in the second pile. So first wins.

// In the second testcase, the series of moves can be depicted as:

// image

// In every possible move of first player we see that the last stone is picked by him, so second player wins.


//answer-68
#include <bits/stdc++.h>
using namespace std;

/*
 * Complete the 'misereNim' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY s as parameter.
 */

string misereNim(vector<int> s) {
    int n = s.size();
    bool allOnes = true;  // Check if all piles have exactly 1 stone
    int xorSum = 0;
    
    for (int stones : s) {
        xorSum ^= stones;
        if (stones > 1) {
            allOnes = false;  // If we find any pile with more than 1 stone
        }
    }
    
    // Case 1: All piles have exactly 1 stone
    if (allOnes) {
        return (n % 2 == 0) ? "First" : "Second";
    }
    
    // Case 2: General case (some piles have more than 1 stone)
    return (xorSum == 0) ? "Second" : "First";
}

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> s(n);
        for (int i = 0; i < n; i++) {
            cin >> s[i];
        }
        cout << misereNim(s) << endl;
    }
    return 0;
}
