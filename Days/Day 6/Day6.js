/*
Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

- isPrefix should return true if it begins with the prefix argument.
- isSuffix should return true if it ends with the suffix argument.
- Otherwise return false.

Test Cases : 
1. Input : isPrefix("automation", "auto")
Output : true

2. Input : isSuffix("Nyctophobia ", "phobia")
Output : true

3. Input : isSuffix("vocation", "logy");
Output : false

*/
function isPrefix(word, prefix) {
    for (let i = 0; i < prefix.length; i++) {
        if (word[i] !== prefix[i]) {
            return false;
        }
    }
    return true;
}

function isSuffix(word, suffix) {
    for (let i = 0; i < suffix.length; i++) {
        if (word[word.length - suffix.length + i] !== suffix[i]) {
            return false;
        }
    }
    return true;
}
console.log("output for test case 1: ");
console.log(isPrefix("automation", "auto"));

console.log("output for test case 2: ");
console.log(isSuffix("Nyctophobia", "phobia"));

console.log("output for test case 3: ");
console.log(isSuffix("vocation", "logy")); 
