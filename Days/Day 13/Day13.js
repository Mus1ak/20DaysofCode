//Track the robot
/*
Problem : This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

- 20 steps North, now at (0, 20)
- 30 steps East, now at (30, 20)
- 10 steps South. now at (30, 10)
- 40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Test Cases :
Input : 
finalPosition([20, 30, 10, 40]) 
finalPosition([0, 0]);
finalPosition([-10, 20, 10]) 

Output :
(-10, 10)
(0, 0)
(20, -20)
*/

function finalPosition(movements) {
    let x = 0, y = 0;
    let direction = "N";
    for (let i = 0; i < movements.length; i++) {
        let steps = movements[i];
        switch (direction) {
            case "N":
                y += steps;
                direction = "E";
                break;
            case "E":
                x += steps;
                direction = "S";
                break;
            case "S":
                y -= steps;
                direction = "W";
                break;
            case "W":
                x -= steps;
                direction = "N";
                break;
        }
    }
    return `(${x}, ${y})`;
}
console.log(finalPosition([20, 30, 10, 40])); 
console.log(finalPosition([0, 0]));
console.log(finalPosition([-10, 20, 10])); 

