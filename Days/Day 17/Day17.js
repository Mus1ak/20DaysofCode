//Palindromic Anagrams

/*
Problem : Given a word, create a function which returns whether or not it's possible to create a palindrome by rearranging the letters in the word.

Test Cases :
Input : 
(canCreatePalindrome("abbbab")
(canCreatePalindrome("rearcac")
(canCreatePalindrome("dasha")

Output :
true
true
false
*/

function canCreatePalindrome(word) {
    let oddCount = 0;
    let letters = word.split('');
    for (let i = 0; i < 26; i++) {
        let count = 0;
        for (let j = 0; j < letters.length; j++) {
            if (letters[j].toLowerCase().charCodeAt(0) - 97 === i) {
                count++;
            }
        }
        if (count % 2 === 1) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}

console.log(canCreatePalindrome("abbbab"));
console.log(canCreatePalindrome("rearcac"));
console.log(canCreatePalindrome("dasha"));

