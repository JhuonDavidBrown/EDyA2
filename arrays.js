
//How to create Array

const firtsArray = [1,2,3,4,5];
const emptyArray = [];

//How to know the size of an array  "length"
console.log(firtsArray.length)// output: 5


//How to join two or more arrays "concat"
const array1 = ["H","E","A","T"];
const array2 = ["H","E","R","S"];
const array3 = array1.concat(array2); 
console.log(array3);// output: array3 ["H","E","A","T","H","E","R","S"]


//How to set up an array "Array"
const elements = new Array(3);
console.log(elements.length); // 3

// Copy to index 1 all elements from index 3 to the end "copywithin"
const array_1 = ["a","b","c","d","e"];
console.log(array_1.copyWithin(1,3)); //output: Array ["d", "d", "e", "d", "e"]

//returns a new array iterator object that contains the key/value pairs for each index in the array "entries".
const iterator = array_1.entries();
console.log(iterator.next().value);//output: Array[0,"a"]

//test if all the elements of the array pass the test implemented by the function "every"
const isBelowThreshold = (currentValue) => currentValue < 40;
const test = [1, 30, 39, 29, 10, 13];
console.log(test.every(isBelowThreshold)); //output: true