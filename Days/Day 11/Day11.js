//Replace Letters With Position In Alphabet

/*
Problem : Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. "a" is 1, "b" is 2, "c" is 3, etc, etc.

Test Cases : 
1. Input : live a life you will remember.
Output : 12 9 22 5 1 12 9 6 5 25 15 21 23 9 12 12 18 5 13 5 13 2 5 18

2. Input : Sky full of stars.
Output : 19 11 25 6 21 12 12 15 6 19 20 1 18 19
*/

function alphabetPosition(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        result += (charCode - 96) + " ";
      } else if (charCode >= 65 && charCode <= 90) {
        result += (charCode - 64) + " ";
      }
    }
    return result.trim();
  }
  console.log(alphabetPosition("live a life you will remember."));
  console.log(alphabetPosition("Sky full of stars."));

  