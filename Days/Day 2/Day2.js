/*
  Problem : Find the Smallest and Biggest Numbers from an array
  Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

  Test Cases : 
  1. Input : numbers1 = [1, 7, 9, 2, 6, 16, 24]
  Ouput : 1, 24

  2. Input : number2 = [4, 55, -2, 10, 90, 69, 27, 192]
*/

function find(numbers) {
    var largest = numbers[0];
    var smallest = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        var temp = numbers[i];
        if (temp > largest) {
            largest = numbers[i];

        }
        if (temp < smallest) {
            smallest = numbers[i];

        }
    }
    return { largest, smallest }
}

numbers1 = [1, 7, 9, 2, 6, 16, 24]
console.log("output for Test Case 1");
console.log("Minimum: " + find(numbers1).smallest);
console.log("Miximum: " + find(numbers1).largest);
console.log("----------")
console.log("output for Test Case 2");
numbers2 = [4, 55, -2, 10, 90, 69, 27, 192]
console.log("Minimum: " + find(numbers2).smallest);
console.log("Miximum: " + find(numbers2).largest);