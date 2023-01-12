/* 
Problem : Write a JavaScript function compareAge(person1, person2) that takes two people objects, each with properties name and age, and returns a string that states how the age of the second person compares to the age of the first person. 

The returned string should be in the format: 
-> {person2.name} is {older than} {person1.name} or
-> {person2.name} is {younger than} {person1.name} or
-> {person2.name} is {same age as} {person1.name}.

Test Cases :
Input : 
p1 : 
- name : Enid
- age : 25 
p2 : 
- name : Dasha
- age : 23 
p3 : 
- name : Sky
- age : 20 
p4 : 
- name : Danny
- age : 20
Ouput : 
Comparing p1, p2 : Dasha is 2 years younger than Enid
Comparing p3, p2 : Dasha is 3 years older than Sky
Comparing p3, p4 : Danny is the same age as Sky
*/

function compareAge(person1, person2) {
    var ageDifference = person1.age - person2.age;
    if (ageDifference > 0) {
      return `${person2.name} is ${ageDifference} years younger than ${person1.name}`;
    } else if (ageDifference < 0) {
      return `${person2.name} is ${-ageDifference} years older than ${person1.name}`;
    } else {
      return `${person2.name} is the same age as ${person1.name}`;
    }
  }
  
  const p1 = { name: "Enid", age: 25 };
  const p2 = { name: "Dasha", age: 23 };
  const p3 = { name: "Sky", age: 20 };
  const p4 = { name: "Danny", age: 20 };
  console.log(compareAge(p1, p2));
  console.log(compareAge(p3, p2));
  console.log(compareAge(p3, p4));
  
  