//Gauss's Addition
/*
Create a function that adds all the numbers together from 1 to n or, if two numbers are given: n to m. The input can be in any order.

Test Cases :
Input : 
addNumbers(100)  
addNumbers(2,5)  
addNumbers(5001, 7000) 
addNumbers(1975, 165) 

Output : 
5050
14
12001000
1937770
*/

function addNumbers(n, m = null) {
    if (m === null) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    } else {
        let min = Math.min(n, m);
        let max = Math.max(n, m);
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
}
console.log(addNumbers(100));  
console.log(addNumbers(2,5));  
console.log(addNumbers(5001, 7000));  
console.log(addNumbers(1975, 165));  
