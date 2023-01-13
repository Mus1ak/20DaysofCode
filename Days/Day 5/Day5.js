/*
Emotify the Sentence

Problem : Write a function that takes in a sentence as a string and replaces specific words "smile", "smiling", "cry", "cries", "angry", "anger", "annoying", "annoyed" with their corresponding emoticons "🙂", "😭", "😡", "😒" respectively, using javascript.

word	emoticon
smile	  🙂
cry	      😭
angry	  😡
annoying  😒

Test Cases : 
Input : 
sentence1 = "I want to smile";
sentence2 = "I want to cry";
sentence3 = "Why is he angry ?";
sentence4 = "he is so annoying";
sentence5 = "I was so annoyed when my computer crashed, but now I'm just smiling because I fixed it and it's not a big deal anymore, even though it was cry worthy at first.";

output : 
I want to 🙂
I want to 😭
Why is he 😡 ?
he is so 😒
I was so 😒 when my computer crashed, but now I'm just 🙂 because I fixed it and it's not a big deal anymore, even though it was 😭 worthy at first.
*/


function emoticonize(sentence) {
    let words = sentence.split(" ");
    for(let i = 0; i < words.length; i++) {
      if(words[i] === "smile" || words[i] === "smiling") {
        words[i] = "🙂";
      } else if(words[i] === "cry" || words[i] === "cries") {
        words[i] = "😭";
      } else if(words[i] === "angry" || words[i] === "anger") {
        words[i] = "😡";
      } else if(words[i] === "annoying" || words[i] === "annoyed") {
        words[i] = "😒";
      }
    }
    return words.join(" ");
  }
  
var sentence1 = "I want to smile";
var sentence2 = "I want to cry";
var sentence3 = "Why is he angry ?";
var sentence4 = "he is so annoying";
var sentence5 = "I was so annoyed when my computer crashed, but now I'm just smiling because I fixed it and it's not a big deal anymore, even though it was cry worthy at first.";
console.log(emoticonize(sentence1));
console.log(emoticonize(sentence2));
console.log(emoticonize(sentence3));
console.log(emoticonize(sentence4));
console.log(emoticonize(sentence5));
