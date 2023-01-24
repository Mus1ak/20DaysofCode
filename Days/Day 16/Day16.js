//WordRank Scoring System

/*
Problem : Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

Note : 
- If two words score the same, return the word that appears first in the original string.
- The returned string should only contain alphabetic characters (a-z).
- Preserve case in the returned string

Test Cases : 
Input : 
str1 = "Wednesday is an amazing series";
Output :  series

Input : 
str2 = "AI is not science fiction, it is the future";
Output : future
*/

function highestScoringWord(str) {
    let words = str.split(" ");
    let highestWord = "";
    let highestScore = 0;
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let score = 0;
      for (let j = 0; j < word.length; j++) {
        score += word.charCodeAt(j) - 96;
      }
      if (score > highestScore) {
        highestScore = score;
        highestWord = word;
      }
    }
    return highestWord;
  }
  let str1 = "Wednesday is an amazing series";
  console.log(highestScoringWord(str1));
 
  let str2 = "AI is not science fiction, it is the future";
  console.log(highestScoringWord(str2));