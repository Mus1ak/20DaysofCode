//Knights Jump

/*
Problem : Create a function that takes a square where a knight jumps from as a string and returns all the possible squares the knight can land on as a string. Ignore capturing and further Chess rules. Be aware of the sides of the board. Knights don't go over the edge, obviously.

Test Cases : 
Input : 
console.log(knightsJump("A1"));
console.log(knightsJump("F4"));
console.log(knightsJump("E2"));

Output : 
C2,B3
H5,H3,D5,D3,G6,G2,E6,E2
G3,G1,C3,C1,F4,D4
*/

function knightsJump(square) {
    let x = square.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    let y = parseInt(square[1]);
    let possibleMoves = "";
    let moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    for (let i = 0; i < moves.length; i++) {
        let newX = x + moves[i][0];
        let newY = y + moves[i][1];
        if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
            possibleMoves += String.fromCharCode(newX + 'A'.charCodeAt(0) - 1) + newY + ",";
        }
    }
    return possibleMoves.slice(0, -1);
}
console.log(knightsJump("A1"));
console.log(knightsJump("F4"));
console.log(knightsJump("E2"));

