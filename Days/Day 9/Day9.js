/*
Move Capital Letters to the Front

Problem : Create a function that moves all capital letters to the front of a word.

Test Cases :
1. Input : moveMENT;
Output : MENTmove

2. Input : ashDa
Output : Dasha

3. Input : shOrtCAKE
Output : OCAKEshrt
*/

function moveCapitals(word) {
    let capitals = "";
    let rest = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            capitals += word[i];
        } else {
            rest += word[i];
        }
    }
    return capitals + rest;
}

let myString1 = "moveMENT";
let newString1 = moveCapitals(myString1);
console.log(newString1); 

let myString2 = "ashDa";
let newString2 = moveCapitals(myString2);
console.log(newString2); 

let myString3 = "shOrtCAKE";
let newString3 = moveCapitals(myString3);
console.log(newString3); 
