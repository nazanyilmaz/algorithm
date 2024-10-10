// Poker Nim is another -player game that's a simple variation on a Nim game. The rules of the games are as follows:

// The game starts with  piles of chips indexed from  to . Each pile  (where ) has  chips.
// The players move in alternating turns. During each move, the current player must perform either of the following actions:

// Remove one or more chips from a single pile.
// Add one or more chips to a single pile.
// At least  chip must be added or removed during each turn.

// To ensure that the game ends in finite time, a player cannot add chips to any pile  more than  times.
// The player who removes the last chip wins the game.
// Given the values of , , and the numbers of chips in each of the  piles, determine whether the person who wins the game is the first or second person to move. Assume both players move optimally.

// Input Format

// The first line contains an integer, , denoting the number of test cases.
// Each of the  subsequent lines defines a test case. Each test case is described over the following two lines:

// Two space-separated integers,  (the number of piles) and  (the maximum number of times an individual player can add chips to some pile ), respectively.
//  space-separated integers, , where each  describes the number of chips at pile .
// Constraints

// Output Format

// For each test case, print the name of the winner on a new line (i.e., either  or ).

// Sample Input

// 2
// 2 5
// 1 2
// 3 5
// 2 1 3
// Sample Output

// First
// Second


//Answer-73
#include <bits/stdc++.h>
using namespace std;

/*
 * Complete the 'pokerNim' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY c
 */

string pokerNim(int k, vector<int> c) {
    int xorSum = 0;
    
    // XOR all pile sizes
    for (int chips : c) {
        xorSum ^= chips;
    }
    
    // If the XOR result is zero, the second player wins; otherwise, the first player wins
    return (xorSum == 0) ? "Second" : "First";
}

int main()
{
    int t;
    cin >> t;
    
    while (t--) {
        int n, k;
        cin >> n >> k;
        vector<int> c(n);
        
        for (int i = 0; i < n; i++) {
            cin >> c[i];
        }
        
        cout << pokerNim(k, c) << endl;
    }

    return 0;
}
