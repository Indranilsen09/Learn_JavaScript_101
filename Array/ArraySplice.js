/* Array Splice method is used to replace / remove element of an Array
from a specific Index */

//Let us replace element in an existing Array
let arr = [1,2,3,4,5,6];
console.log("Splicing from index 1 to 3 with string hello");
arr.splice(1,3,"Hello");
console.log(arr);


//Let us remove any element from an array
let arr1 = [1,2,3,4,5,6];
console.log("Using Splice method 1 to 3 without any replacement");
arr1.splice(1,3);
console.log(arr1); //Size: (3) [1, 5, 6]

//After both the results I understood - both the indexes are Inclusive in Splice method





