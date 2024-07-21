/* Array methods - Shift & Unshift
Shift - removes the first element from an array and returns it
Unshift - adds a new element to the beginning of an array and returns the new length of the
array.
*/
const array = [1, 2, 3, 4, 5, 6];
console.log(array.shift()); // 1
console.log(array); // [2, 3, 4, 5, 6]

//unshift
console.log(array.unshift(0)); // 6
console.log(array); 