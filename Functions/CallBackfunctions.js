//Callback function : callback function is a function that is passed as an argument to another function
//it is used to perform some operation after the execution of the outer function

//lets define a normal function
function greetings(name)
{
    console.log('Welcome!! '+ name); //Normal Sync task
}

greetings('Indra'); //Welcome!! Indra

//Here we- saw that We're passing one argument which is a string,
//and it is being used inside the function to print the message on the console.

//Now lets define a function with callback function

function Welcome(empName, callback)
{
    console.log("Welcome! Mr."+empName+" ");
    callback();
    
}
//welcome is the outerfunction now, let us define the callback function that we're going to call after
//Outer function task is completed.

function displayDate(){
    let date = new Date();
    console.log(date.toLocaleDateString());
}

//Now lets call the outerfunction: Welcome and pass the function::displayDate() as an argument
//to the outer function

Welcome('Indra',displayDate); //Welcome! Mr.Indra 
                              //31/7/2024
//Now Lets callback function with an Async task
//Will use setTimeout(function(){},TimeUnit(ms)); to create an asynchronous task

function printInfos(empName,callback)
{
    setTimeout(function(){
        console.log(`printing info for:  ${empName}`);
        callback();
    },2000);
}

function displayDateandTime()
{
    const date = new Date();
    console.log(date.toLocaleDateString() + " "+date.toLocaleTimeString());
}

printInfos('Mr.Indranil',displayDateandTime); 
//After delay of 2seconds its printing: 
/* printing info for:  Mr.Indranil
31/7/2024 6:27:27 pm */

//Lets see one practical example
//
//lets say there is a function: fetchUserData()- Which fetches user taking userID as input 
//and call another function to parse the  details of the user
let userDB={
    1:{
        id:1,
        name:'Indra',
        occupation: 'SDET',
        baseLocation:'Kolkata',
        salary:50000,
        contactDetails: 6290256743,
        empCode:'KOL01IN'
    },
    2:{
        id:2,
        name:'Promode',
        occupation: 'Sr. SDET',
        baseLocation:'Bangalore',
        salary:500000,
        contactDetails: 999999999,
        empCode:'KA01IN'
    },
    3:{
        id:3,
        name:'Naveen',
        occupation: 'Tutor',
        baseLocation:'Pune',
        salary:5000000,
        contactDetails: 999999999,
        empCode:'MH01IN'
    } 
};
function fetchUserData(userID=0,callback,callback1)
{
    if(!(userID===0)){
   setTimeout(function(){
    let usero = userDB[userID];
    console.log("Displaying info for: User with ID-"+ usero.id);
    callback(usero);
    
   },5000);
}
else{
    console.error('No User Found:'+ " printing all the user info");
    callback1(userDB);
}

}

function displayUserInfo(user)
{
    console.log("Hi, "+ user.name+ " & he is working as: "+ user.occupation);
    console.log(user);
}
function displayAllInfo(user)
{
    let data = Object.entries(user);
    console.log(data);
}

fetchUserData(2,displayUserInfo,displayAllInfo);