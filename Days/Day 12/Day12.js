//Double Character Swap
/*
Problem : Write a function to replace all instances of character c1 with character c2 and vice versa.

Test Cases :
1. Input : 
originalStr1 = "Snapping one, two, Where are you?";
c1 = "n";
c2 = "o";

Output : Soappiog noe, twn, Where are ynu?

2. Input : 
originalStr2 = "I love the emotion sickness";
c3 = "s";
c4 = "i";

Output : I love the emotson isckneii
*/


function replaceChars(str, c1, c2) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === c1) {
            newStr += c2;
        } else if (str[i] === c2) {
            newStr += c1;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}
let originalStr1 = "Snapping one, two, Where are you?";
let c1 = "n";
let c2 = "o";
let newStr1 = replaceChars(originalStr1, c1, c2);
console.log(newStr1);

let originalStr2 = "I love the emotion sickness";
let c3 = "s";
let c4 = "i";
let newStr2 = replaceChars(originalStr2, c3, c4);
console.log(newStr2); 
