//Connecting Words
/*
Problem : Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Test Cases :
Input : 
connectWords(["oven", "envier", "erase", "serious"])
connectWords(["move", "over", "very"])
connectWords(["Dasha", " Ta", "ran"])

Output : 
{ result: 'ovenvieraserious', minShared: 2 }
{ result: 'movery', minShared: 3 }
{ result: 'Dasha Taran', minShared: 0 }
*/

function connectWords(words) {
    let result = words[0];
    let minShared = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < words.length; i++) {
        let shared = 0;
        for (let j = 0; j < words[i - 1].length; j++) {
            if (words[i].startsWith(words[i - 1].substring(j))) {
                shared = words[i - 1].length - j;
                break;
            }
        }
        minShared = Math.min(minShared, shared);
        result += words[i].substring(shared);
    }
    return {result: result, minShared: minShared};
}
console.log(connectWords(["oven", "envier", "erase", "serious"]));
console.log(connectWords(["move", "over", "very"]));
console.log(connectWords(["Dasha", " Ta", "ran"]));

