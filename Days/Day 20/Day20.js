//Baum-Sweet Sequence

/*
Problem : Create a function that takes a number n and returns all the terms of the Baum-Sweet sequence, from 0 to n (included).

The Baum-Sweet sequence is the sequence of numbers bi such that bi = 1 if the binary representation of i contains no block of consecutive 0 of odd length, and bi = 0 otherwise.

Test Cases : 
Input :
baumSweetSequence(1)
baumSweetSequence(10)
baumSweetSequence(20)

Output :
[ 0, 1 ]
[
  0, 1, 0, 1, 1,
  0, 0, 1, 0, 1,
  0
]
[
  0, 1, 0, 1, 1, 0, 0,
  1, 0, 1, 0, 0, 1, 0,
  0, 1, 1, 0, 0, 1, 0
]
*/

function baumSweetSequence(n) {
    var sequence = [];
    for (var i = 0; i <= n; i++) {
        var binary = i.toString(2);
        var isValid = true;
        var consecutiveCount = 0;
        for (var j = 0; j < binary.length; j++) {
            if (binary[j] === "0") {
                consecutiveCount++;
            } else {
                if (consecutiveCount % 2 !== 0) {
                    isValid = false;
                    break;
                } else {
                    consecutiveCount = 0;
                }
            }
        }
        if (consecutiveCount % 2 !== 0) {
            isValid = false;
        }
        sequence.push(isValid ? 1 : 0);
    }
    return sequence;
}
console.log(baumSweetSequence(1));
console.log(baumSweetSequence(10));
console.log(baumSweetSequence(20));
