//Single Parameter Arrow Function: Can Skip parenthesis around param
const square = num => num*num;
var result = square(5);
console.log(result);

//No Parameter Arrow function: have to give blank parenthesis
 var mesg =()=> 'Hello JS, This function does not have any param';
 console.log(mesg());

//Two parameter Arrow Function: have to give blank parenthesis
let add = (a,b) => a+b;
var res = add(2,3);
console.log(res);

//Object Arrow function:

//Create an Object
let person = {
        'FirstName': 'Rohit',
        'lastName' :'Shetty'
}

var getFullName =obj => `${obj.FirstName} ${obj.lastName}`;
console.log(getFullName(person));


//Arrow Function with Default value
let greet = (username='Guest', age=0)=> `Welcome ${username}, You're ${age} years old`;
console.log(greet());// Forget to pass Arguments, then it will take the default value; i.e, Welcome Guest, You're 0 years old
console.log(greet('Indra',24)); //Welcome Indra, You're 24 years old

let greets =username => `Greetings, ${username}`;
console.log(greets()); //Greetings, Undefined,
console.log(greets('Indranil'));


//Arrow Function with Rest parameters:
//Rest Parameters are used when we don't know the number of argument going to come
let sum= (...numbers)=> numbers.reduce((acc,num)=> acc+num,0);

var result = sum(6,2,9,0,2,5,6,7,4,3);
console.log(" total Sum: "+result);