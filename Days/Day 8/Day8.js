//Convenience Store

/*
Problem : Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Test Cases : 
Input : 
changeEnough([25, 20, 5, 0], 4.25))
changeEnough([100, 20, 5, 0], 50.50))
changeEnough([20, 20, 5, 0], 4.25))
changeEnough([25, 20, 5], 4.25))
changeEnough([25, 20, 5, 0], -5))

Output : 
true
Insufficient funds: you need $23.25 more.
false
true
Invalid input: change array must contain 4 elements in the following order: quarters, dimes, nickels, pennies.
false
Invalid input: amountDue must be a positive number.
false
*/

function changeEnough(change, amountDue) {
    if (change.length !== 4) {
        console.log("Invalid input: change array must contain 4 elements in the following order: quarters, dimes, nickels, pennies.");
        return false;
    }
    let total = (change[0] * 0.25) + (change[1] * 0.1) + (change[2] * 0.05) + (change[3] * 0.01);
    if (isNaN(amountDue) || amountDue <= 0) {
        console.log("Invalid input: amountDue must be a positive number.");
        return false;
    }
    if (total < amountDue) {
        console.log("Insufficient funds: you need $" + (amountDue - total) + " more.");
        return false;
    }
    return true;
}
console.log(changeEnough([25, 20, 5, 0], 4.25));
console.log(changeEnough([100, 20, 5, 0], 50.50));
console.log(changeEnough([20, 20, 5, 0], 4.25));
console.log(changeEnough([25, 20, 5], 4.25));
console.log(changeEnough([25, 20, 5, 0], -5)); 
