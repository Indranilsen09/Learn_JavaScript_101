//1.Check unique values from an array
let array = [1,2,2,3,3,3,4,5,5,4,3,1,4,5,2];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray); //(5) [1,2,3,4,5]
//... is spread parameter

//2. Convert a integer to String
//1st way:
let num = 123;
let numstr = 123+'';
console.log(typeof numstr); // 'string'
//2nd way:
let numstr1 = String(num);
console.log(typeof numstr1); // 'string'
//3rd way:
let numstr2 = num.toString();
console.log(typeof numstr2); //'string'
//Other ways to check if its string is to concatenate with other values
console.log(numstr+10); //if string: 12310 ; if number : will give 133
//Output is : 12310, that means numstr is a string

//3. Convert float to number
let floatNum = 12.5;
const number =  parseInt(floatNum);
console.log(number); //12
console.log(typeof(number)); //number


//4. Check if a variable is a number
let value = 1234;
if(typeof value==='number' && !isNaN(value)){
    console.log(value+ " is a number");
}else{
    console.log(value+ " is not a number");
}

//5. swap two varibles values:
let x =10;
let y =20;
console.log("x: "+ x + " & y: "+ y); //x: 10 & y: 20
//swapping using temp variable;
var temp = x;
x = y;
y =temp;
console.log("x: "+ x + " & y: "+ y); //x: 20 & y: 10
//swapping without using temp variable;
[x,y] = [y,x];
console.log("x: "+ x + " & y: "+ y); //x: 10 & y: 20

//6. Check if an object has a property
const person = {
    name: 'John',
    age: 30,
}

if(person.hasOwnProperty('name')){
    console.log("person has name property");
}   


//7. Check if an object is empty
const obj = {};
console.log(Object.keys(obj).length === 0); //true



//8. Remove falsy values from an array
const arr = [1,2,"",0,false,NaN,null,undefined,"hello",true,9];
let newarr = arr.filter(Boolean);
console.log(newarr); // [1, 2, "hello", 9, true]

//9 String:--> UpperCase, LowerCase
let strin = "Hi Indranil";
let uppercaseStr = strin.toUpperCase();
let lowercaseStr = strin.toLowerCase();
console.log(uppercaseStr);
console.log(lowercaseStr);

//10. Check if an array contains a value
const arry = [1,3,2,4,5,6,7,8,9];
//1st Approach
var idx = arry.indexOf(1);
if(idx>=0){
    console.log("value is present in array");
}else if(idx<0){
    console.log("value is not present in array");
}
//2nd Approach
if(arry.includes(10)){
    console.log("value is present in array");
}else{
    console.log("value is not present in array");
}

//---------------------------------------------------------------------------------------------------------
//11. generate a random number
let min = 10;
let max = 200;
let randomInt = Math.floor(Math.random()* (max-min))+min;
console.log(randomInt);

//12.Convert a String to number
let strNum = '99.99';
let x1 = parseFloat(strNum);
//parseInt(strNum) : this can also be used
console.log(x1); //99.99
console.log(typeof x1); //number

//----------------------------------------------------------------------------------------------------

//13. Join the array elements
const words = ['hello','Indranil','how','are','you', '?'];
const msg = words.join(' ');
console.log(msg); //hello Indranil how are you ?

//14. get an Object Property
const user = {
        name:'Indranil',
        age:24,
        dob:'29-09-1999'
}

console.log(user.name); //Indranil
console.log(user['dob']); //29-09-1999

//15. Clone an Array/Object
let marks = [10,20,40,55,66,77];
let marksCopy = [...marks];
console.log(marksCopy); //[10,20,40,55,66,77]

//taking above user object
const usercopy = {...user};
//console.log(JSON.stringify(usercopy));
console.log(usercopy);

//------------------------------------------------------------------------------------

//16. Comvert an object to array;
const employee = {
    id:1,
    name:'Indranil',
    salary:50000
}

//Keys Array
const keys = Object.keys(employee);
console.log(keys);

//values Array
const values = Object.values(employee);
console.log(values);

//key-value array
const entries = Object.entries(employee);
console.log(entries);

//---------------------------------------------------------------------------------------------------
//17. Get current Date and Time
const date = new Date();
console.log(date); //Sun Jul 28 2024 15:27:15 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString()); //28/7/2024
console.log(date.toLocaleString()); //28/7/2024, 3:27:59 pm
console.log(date.toLocaleTimeString()); //3:28:18 pm

//18 Check if a variable is undefined
let name;
console.log(name === undefined); //true
if(typeof name ==='undefined'){
    console.log('name is undefined'); 
}

//19. Truncate an Array -- Shorten the array
let arrr = [1,2,3,4,5,6,7];
console.log(arrr.length); //7

arrr.length=4; //shorting it to 4 length
console.log(arrr.length); //4
console.log(arrr); //(4) [1, 2, 3, 4]

//20 last item in an array -- without using .length
let pop = [1,2,3,4,5];
let n1 = pop.slice(-1);
console.log(n1); //(1) [5]

