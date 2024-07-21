//1. map : it maps each element in the array to a particular callback function & Returns a new array
let nums = [1,2,3];
let doubleNums = nums.map((e)=> e*2);
console.log(doubleNums);

//Farenheit to Celcius
let FahTemp = [32,68,86,104];
function fahToCel(fah)
{
    return ((fah-32)* (5/9));

}
let CelTemp = FahTemp.map(fahToCel);
console.log(CelTemp);