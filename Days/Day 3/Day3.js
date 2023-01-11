/*
What's Hiding Amongst the Crowd?

Problem : A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

-> The wanted word is in lowercase.
-> The crowd of letters is all in uppercase.
-> Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

Test Cases : 
1. Input : UcUNFYGaFYFYGtNUH
Ouput : cat

2. Input : dIJISHHIaJIHMHKshUaY
Output : dasha

*/

function detectWord(str) {
    let lowercase = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'z') {
        lowercase += str[i];
      }
    }
    return lowercase;
  }
console.log("Output for test case 1");
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log("---");
console.log("Output for test case 2");
console.log(detectWord("dIJISHHIaJIHMHKshUaY"));