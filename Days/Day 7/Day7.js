//Remove Trailing and Leading Zeros

/*
Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

- Trailing Zeros are the zeros after a decimal point which don't affect the value.
- Leading Zeros are the zeros before a whole number which don't affect the value.

Test Cases : 
Input : 
n1 = "000234.000"
n2 = "3.04000"
n3 = "00402"
n4 = "230.000"
n5 = "003.14209000"

Ouput :
234
3.04
402
230
3.14209
*/

function removeZeros(n) {

    while (n.endsWith("0")) {
        n = n.substring(0, n.length - 1);
    }

    while (n.startsWith("0")) {
        n = n.substring(1);
    }

    if (n.endsWith(".")) {
        n = n.substring(0, n.length - 1);
    }
    return n;
}

let n1 = "000234.000";
let n2 = "3.04000";
let n3 = "00402";
let n4 = "230.000";
let n5 = "003.14209000";

console.log(removeZeros(n1));
console.log(removeZeros(n2));
console.log(removeZeros(n3));
console.log(removeZeros(n4));
console.log(removeZeros(n5)); 
