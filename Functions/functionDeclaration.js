//1. Function Declaration: This is a normal function Declaration with functionname and params

function add(a,b)
{
    return a+b;
}

function print()
{
    console.log("This is a JS function");
}

const sum = add(5,6);
console.log(sum); //11
print();

//2. Function Expression: Kind of Anonymous Function where we're not giving any funcName
//  and we're assigning it to a variable
let prod = function(x,y)
{
    return x*y;
}

var mul = prod(5,6);
console.log(mul); //30

//3. Arrow Function: Its also Anonymous Function, where no need to Give FuncName and Assign
//  to a variable. Its a short form of Function Expression.

let subtract = (a,b)=> a-b;

//calling subtract function
var subs = subtract(10,2);
console.log(subs); //8

//4. Function Constructor : It takes a new keyword to create function expression
// and takes params as String, where the last param is use to define operation.
// var square = function('x','return x*x;'){
//     return x*x;
// };
// //calling square function
// var sqr = square(5);
// console.log(sqr);

//This type of function declaration should be avoid due to Security Risks

//5. IIFE(Immediate Invoked Function Expression): This is also Anonymous function declaration,
// which does not required to be called hence, invoked Automatically
// It is used to hide the variables and functions from the global scope.
// It is used to create private variables and functions.

//Basic - IIFE function: Without Params
(function(){
    console.log("This is a IIFE function");
})();

//IIFE with params

(function(a,b)
{
    console.log("This is an IIFE function with params :2 &3 and there product is "+ a*b);
})(2,3);

//IIFE with Arrow function
((a)=>
{
    console.log("Arrow IIFE: "+ a*a);
})(5);

//For IIFE ffunction we do not have explicitly call it - it automatically runs

//6. Generator Function: A function that returns a iterator object for generating a sequential values
//  on demand. It is used to create an infinite sequence of values.
function* funcName()
{
    yield 1;
    yield 2;
    yield 3;
    //yield 4;
    //yield 5;
}
//Calling generator function
let iteratorObject = funcName();
//to get the value we need to say .next().value
console.log(iteratorObject.next().value); //1

//7. Anonymous function : Those functions which do not have any functionname are called Anonymous functions
// Anonymous function can be called by assigning it to a variable or by passing it as a parameter
// Also Can be used in Callback function
let numbers = [1,2,3,4,5];
let doubleNum = numbers.map((e)=> e*2); //Anonymous arrow function
let squareNum = numbers.map(function(e){return e*e}); //anonymous function
console.log(doubleNum); // [2,4,6,8,10]
console.log(squareNum); //[1, 4, 9, 16, 25]

//8. Recursive Function :: A function which calls itself inside the function body
//Questions : Find Factorial of a number;

function factorial(n)
{
    if(n==0 || n==1)
        {
            return 1;
        }else 
        {
            return n*factorial(n-1);
        }
}

//calling factorial function with argument 5
var fact = factorial(5);
console.log("Factorial of 5 is : "+ fact);



//9. Higher-Order Function: Its takes two or more function as an parameter of the function
//  or returns a function as a result of the function.
function addition(a,b)
{
    console.log(`Addition of  ${a} & ${b}`);   
    return a+b;
}   
function subtraction(a,b)
{
    console.log(`subtraction of  ${a} & ${b}`);
    return a-b;
    
}
const division = (a,b) => a/b;
const multiplication = function(a,b)
{
    console.log(`Division of  ${a} & ${b}`); 
    return a*b;
}
//Now I will declare one HigherOrderFunction
function operation(funcName, a, b)
{
    
    let result = funcName(a,b);
    console.log(`result is: ${result}`);
}
//in order to call higher order function
operation(addition, 10, 20); //30
operation(subtraction, 10, 20); //-10
operation(division, 20, 10); //0.5
operation(multiplication, 10, 20); //200



