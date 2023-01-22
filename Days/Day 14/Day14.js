//Unique Genres

/*
Problem : There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.

Test Cases :
1. Input : 
albumStyles1 = ["Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul"];
Output : [ 'House,Folk', 'Trance,Downtempo,Big Beat,House', 'Deep House' ]

2. Input :
albumStyles2 = ["folk",
    "Progressive House,Folk",
    "Mid tempo,Melodic Dubstep",
    "Phonk",
    "Color Bass"];
Output : [
  'Progressive House',
  'Mid tempo,Melodic Dubstep',
  'Phonk',
  'Color Bass'
]
*/

function findUniqueStyles(styles) {
    if (!styles) return "Invalid Input"; 
    var allStyles = ["pop", "rock", "jazz", "hip hop", "blues", "country", "folk", "classical", "electronic", "metal", "reggae", "soul", "r&b", "funk", "latin", "world"];
    var uniqueStyles = []; 
    for (var i = 0; i < styles.length; i++) {
        var isUnique = true;
        for (var j = 0; j < allStyles.length; j++) {
            if (styles[i].toLowerCase() === allStyles[j].toLowerCase()) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) uniqueStyles.push(styles[i]);
    }
    return uniqueStyles;
}
var albumStyles1 = ["Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul"];
console.log(findUniqueStyles(albumStyles1));
var albumStyles2 = ["folk",
    "Progressive House",
    "Mid tempo,Melodic Dubstep",
    "Phonk",
    "Color Bass"];
console.log(findUniqueStyles(albumStyles2));
