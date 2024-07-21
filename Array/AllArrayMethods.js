//All Array methods in Single JS File

let MyArray = [] //Empty Array
let Lang = ["Java", "Python", "JS"];

//1. Push - Add element at the end of the Array

Lang.push("Html");
console.log(Lang);// (4) ['Java', 'Python', 'JS', 'Html']
//_____________________________________________________________________________________
//2. pop() - Remove the Last Element of the Array

Lang.pop();
console.log(Lang); //Returning new Array Length and the New Array :(3) ['Java', 'Python', 'JS']
//_____________________________________________________________________________________

//3. Shift() - Removes the first Element of the Array 

Lang.shift();
console.log(Lang); // and Return new Array with that Element : (2) ['Python', 'JS']
//_____________________________________________________________________________________

//4 Unshift()- Adds Element to the first of the Array
Lang.unshift("Java");
console.log(Lang);
//_____________________________________________________________________________________
//5. Splice() - Removes the Element from the Array from a specific index range

let Numbers = [1,2,3,4,5,6]; //Numbers Array
Numbers.splice(0,3);
console.log(Numbers); //Returns a new array with new array length considering Last index is Exclusive
//(3) [4, 5, 6] || Element with index 0,1,2 removed from the Array

//Splice is Also used to Update values in an Array
//Declared an Array with length 6 and want to update value of Index 1 to 4, i.e; [2,3,4,5] 
let numbers = [1,2,3,4,5,6];
numbers.splice(1,4,8);
console.log(numbers); // Returns a new array updating values of specific range : (3) [1, '8', 6]
//_____________________________________________________________________________________

//6.Slice - Returns a new subset of array from an existing array 

let colors = ['Red','Blue','Pink', 'Violet'];
let newcolor = colors.slice(0,1);
console.log(newcolor); // Last idx is  Exclusive : (1) ['Red']
//_____________________________________________________________________________________

//7. Concat - Add two or More Arrays and Returns a new Array 
let fruits = ["Apple", "Banana", "Orange"];
let veggies = ['Potato', 'cucumber', 'Onion'];

let groceries = fruits.concat(veggies);
console.log(groceries); //(6) ['Apple', 'Banana', 'Orange', 'Potato', 'cucumber', 'Onion']
//_____________________________________________________________________________________

//8.indexOf: Returns the index of the first occurence of the Element present , if not found returns -1

let coldDrinks = ['Sprite','thumbsup','cocacola','fruity', ];
console.log(coldDrinks.indexOf('cocacola')); //2 : that is the Index of Cocacola that is 2
console.log(coldDrinks.indexOf('maaza')); //-1 : Since this element is not present;
let duplicateElements = [1,2,3,4,5,1,2];
console.log(duplicateElements.indexOf(2)); //1 : since it will only return the first occurence.

//How to fetch the Duplicate element index example : Index of Element -2
//for that we need to pass the start index in indexOf() method
console.log(duplicateElements.indexOf(2,3)) //Output: 6//i.e I am telling indexOf() to start search from third index

//Instead of HardCoding : Staring index of Searching Element , we can say
let Colddrinks = ['maaza','cocacola','sprite','thumbsUp','maaza'];
var index = Colddrinks.indexOf('maaza',Colddrinks.indexOf('maaza')+1);
console.log('Index of maaza: '+ index); //4 : Index of Duplicate Element
//How? Since we're telling indexOf method to Start Search from the index of First occurence of the Element
//i.e; its found 'maaza' in index :0 we added +1 then, it will start searching from 1st Index

//_____________________________________________________________________________________

//9.Includes - it returns boolean true:false if that element/Multiple Element is present in an array or not
let users = ['Admin', 'Agent', 'users', 'Business Users'];
var flag = users.includes('Agent');
console.log(flag);// true: returns true if that element is present

//Now Checking with Multiple element in OR condition
var flag1 = users.includes('Agent','Indra');
console.log(flag1);//true ? cause both the element are in OR condition if any one element is present it will return true
//_____________________________________________________________________________________

//10. ForEach -> helps you iterate through array elements and allows Design custom function in each element
let phoneNum = [6,2,9,0,2,5,6,7,4,3];

phoneNum.forEach(digits => console.log(digits)); //6 2 9 0 2 5 6 7 4 3 in seperate lines











