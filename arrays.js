
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

//Change all elements in an array to a static value "fill"
const elements_1 = [1,2,3,4];
console.log(elements_1.fill(0,2,4));//output: Array[1,2,0,0]

//creates a new array with all the elements that meet the condition implemented by the given function "filter"
const words = ["Breaking","Bad","Better call","Saul","Cyberpunk 2077"];
const res = words.filter((word)=> word.length >6);//output: Array["Breaking","Better call","Cyberpunk 2077"]

//returns the value of the first element in the array that fulfills the function "find"
const found = test.find((i)=> i < 5);
console.log(found);//output: 1

//returns the index of the first element of an array that satisfies the function "findIndex"
const array_2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));// Expected output: 3

//instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function "findLast"
const found_1 = array1.findLast((element) => element > 45);
console.log(found_1);// Expected output: 130

//instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function "findLastIndex"
const LargeNumber = (element) => element > 45;
console.log(array1.findLastIndex(LargeNumber));// Expected output: 3

//instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth "flat"
const arra = [0, 1, 2, [3, 4]];
console.log(arra.flat());// output: Array [0, 1, 2, 3, 4]

//instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level "flatMap"
const arr1 = [1, 2, 1];
const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result);//output: Array [1, 2, 2, 1]

//instances executes a provided function once for each array element "forEach"
const arr2 = ['a', 'b', 'c'];
arr2.forEach((element) => console.log(element));//output: "a" "b" "c"

// instances determines whether an array includes a certain value among its entries, returning true or false as appropriate "includes"
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));//output: true

//nstances returns the first index at which a given element can be found in the array "indexOf"
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));//output: 1


//instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string "join"
const elementsNature = ['Fire', 'Air', 'Water'];
console.log(elementsNature.join(''));//output: "FireAirWater"

//instances returns a new array iterator object that contains the keys for each index in the array "keys"
const array_3 = ['a', 'b', 'c'];
const iterator2 = array_3.keys();
for (const key of iterator2) {
  console.log(key);
}

//instances returns the last index at which a given element can be found in the array "lastIndexOf"
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));//output: 3

//instances creates a new array populated with the results of calling a provided function on every element in the calling array "map"
const array_4 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);//output: Array [2, 8, 18, 32]

//instances removes the last element from an array and returns that element. This method changes the length of the array "pop"
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());//output: "tomato"

//instances adds the specified elements to the end of an array and returns the new length of the array "push"
const animals2 = ['pigs', 'goats', 'sheep'];
animals2.push('chickens', 'cats', 'dogs');
console.log(animals2);//output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element "reduce"
const array5 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array5.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);//output: 10

//instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value "reduceRight"
const array6 = [
    [0, 1],
    [2, 3],
    [4, 5],
];
const res3 = array6.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),);
console.log(res3);//output: Array [4, 5, 2, 3, 0, 1]
  
//instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first "reverse"
const array7 = ['one', 'two', 'three'];
const reversed = array7.reverse();
console.log('reversed:', reversed);//output: "reversed:" Array ["three", "two", "one"]

//instances removes the first element from an array and returns that removed element. This method changes the length of the array "shift"
const array8 = [1, 2, 3];
const firstElement = array8.shift();
console.log(array8);//output: Array [2, 3]

//"slice"
const animals4 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals4.slice(2));//output: Array ["camel", "duck", "elephant"]

//instances tests whether at least one element in the array passes the test implemented by the provided function "some"
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));//output: true

//instances sorts the elements of an array in place and returns the reference to the same array, now sorted "sort"
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);//output: Array ["Dec", "Feb", "Jan", "March"]

//instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place "splice"
const months2 = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months2);//output: Array ["Jan", "Feb", "March", "April", "June"]

//instances returns a string representing the elements of the array "toLocaleString"
const array9 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array9.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);//output: "1,a,12/21/1997, 2:12:00 PM"

//instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order "toReversed"
const items = [1, 2, 3];
const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

//instances returns a string representing the specified array and its elements "toString"
const array_6 = [1, 2, 'a', '1a'];
console.log(array_6.toString());//output: "1,2,a,1a"

//instances adds the specified elements to the beginning of an array and returns the new length of the array "unshift"
const array_10 = [1, 2, 3];
console.log(array_10.unshift(4, 5));//output: 5

//instances returns a new array iterator object that iterates the value of each item in the array "values"
const array_12 = ['a', 'b', 'c'];
const iterator_3 = array1.values();
for (const value of iterator) {
  console.log(value);
}//output: "a" "b" "c"
