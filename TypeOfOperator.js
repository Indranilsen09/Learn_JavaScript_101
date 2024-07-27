//TypeOf Operator in JS: It helps us to understand the Typeof variable we declared
//Since in JavaScript , variable type is declared in runtime

let x =30;
console.log(typeof(x)); //number

let msg = "Hello JS";
console.log(typeof msg); //string

let obj = {
    name:'Johnny'
}
console.log(typeof(obj)); //object

let flag = true;
console.log(typeof flag); //boolean

let arr = [1,2,3,4,5];
console.log(typeof arr); //object

let k = null;
console.log(typeof k); //object

let js;
console.log(typeof js); //undefined

function print(empName)
{
    console.log(`${empName} is an employee`);
}
console.log(typeof print); //function

//We can also store the type of the variable
let type = typeof flag;