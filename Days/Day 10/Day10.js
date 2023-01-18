//Vowel Sandwich
/*
Problem : Create a function which validates whether a character string is a vowel sandwich. 

In order to have a valid sandwich, the string must satisfy the following rules:
- The first and last characters must be a consonant.
- The character in the middle must be a vowel.

Test Cases: 
Input : 
isVowelSandwich("cat")
isVowelSandwich("Ronaldo")
isVowelSandwich("pokemon")
isVowelSandwich("bake")

Output : 
true
false
true
false
*/

function isVowelSandwich(str) {

    if (str.length < 3) {
        return false;
    }

    if (!isConsonant(str[0]) || !isConsonant(str[str.length - 1])) {
        return false;
    }

    if (!isVowel(str[Math.floor(str.length / 2)])) {
        return false;
    }
    return true;
}

function isConsonant(c) {

    var vowels = "aeiouAEIOU";
    return vowels.indexOf(c) === -1;
}

function isVowel(c) {

    var vowels = "aeiouAEIOU";
    return vowels.indexOf(c) !== -1;
}
console.log(isVowelSandwich("cat")); // false
console.log(isVowelSandwich("Ronaldo")); // true
console.log(isVowelSandwich("pokemon")); // false
console.log(isVowelSandwich("bake")); // false
