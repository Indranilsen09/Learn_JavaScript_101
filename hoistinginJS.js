//hoisting a variable;
console.log(carName);
var carName ="Volvo";
console.log(carName);

//Hoisting a Function;
foods();

function foods()
{
    console.log("Original Food Choice: "+ FoodChoice); //Undefined
    var FoodChoice= "Grapes"; 
    console.log("New Choice: "+ FoodChoice);
}

//Stop Hoisting using Let & Const;
//let and const are block scoped and will throw Reference error if not declared before calling;
//Let us Understand Block Level Scope

let weather = "Sunny"; // Initialize the Variable here with val: Sunny
function changeWeather()
{
         let weather = "Rainy"; //Again initialize with some other value & 
        //this Var have a scope till this block of code only
        console.log(" Changed Weather is "+ weather);
}
changeWeather();
console.log("Original Weather is "+ weather); //prints Sunny

//Const Declaration
const weeather = "Sunny";

function changeWeeather()
{
     weeather = "Rainy";
    console.log("Changed const Weather is "+ weeather); //Trying to Print Rainy
}
changeWeather();
console.log("Ori Const Weather is "+ weeather);

