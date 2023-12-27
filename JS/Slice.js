/*
slice() Method:
The slice() method returns a shallow copy of a portion of an array into a new array without modifying the original array. 
It takes two parameters: the starting index (inclusive) and the ending index (exclusive).
*/
const fruits = ["apple", "banana", "grapes", "guava", "pineapple"];
const sliced1 = fruits.slice(1, 2);
console.log("sliced1==>", sliced1);
const sliced2 = fruits.slice(1, 1);
console.log("sliced2==>", sliced2);

const spliced1 = fruits.splice(1, 1, "kiwi");
console.log("spliced1==>", spliced1);
console.log(fruits);
