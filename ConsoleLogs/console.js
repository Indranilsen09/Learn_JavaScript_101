//Types of Logging using Console Object

//Normal Logging with Message
console.log('Hello World');
//Error Logging using .error('Message'): Comes in Red Color text
console.error('Error:');

//Logging Warning : Comes in Red Color Text
console.warn('!Warning!');
//Logging Info : Comes in Blue Color Text
console.info('Information');

//Logging Debug : Comes in Green Color Text
console.debug('Debugging..');

//Defining Object:
let obj = new Object();
obj.name = 'Indra';
obj['age']= 25;

//Printing the Object using .table() to log in tabular format
console.table(obj);
/*
Output:
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│ name    │ 'Indra' │
│ age     │ 25      │
└─────────┴─────────┘
*/
//-------------------------------------------------------------------------------------


//Grouping Logs: It Specify  all the sub logs under the one headline for this case its
//Login Featue and Admin Controls

console.group('Login Feature');
console.log('Enter username');
console.log('Password Entered');
console.log('Sign-in Button Clicked');
console.log('Signed in');
console.group('Admin Controls');
console.log('Switched to Admin Profile');
console.groupEnd();                  //This Marks the end of any group


//--------------------------------------------------------------------------------
//Timing Logs: It helps to measure the time taken by a particular block of code
console.time("print 1 to N Values");
for(let i=0; i<100; i++){
    console.log(i);
    
};
console.timeEnd(`print 1 to N Values`);   // .timeEnd('same argument given in the start .time() method');
//Output: print 1 to N Values: 292ms



//console.assert() this Helps in Asserting, and if the assertion fails - it log error message with
//It takes two parameter 1. condition to specify, 2. Error Message.
console.assert(10==20,"!Not Equals");

//Tracing: Tracinng is use to debug any program or function

function testTracing()
{
    console.trace();
}
testTracing();
/* 
Output: 
Trace
    at testTracing (D:\Projects2024\PlayWright_With_JavaScript\JavaScript_Examples\ConsoleLogs\console.js:70:13)
    at Object.<anonymous> (D:\Projects2024\PlayWright_With_JavaScript\JavaScript_Examples\ConsoleLogs\console.js:72:1)
*/


//Color Console Logging - using CSS Script- "%c" specify the use of CSS Script in logging
console.log("%c I love JS ","color:red; background-color:yellow; border:solid; size:40px;");






