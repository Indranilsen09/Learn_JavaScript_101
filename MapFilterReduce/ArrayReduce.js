//Reduce: It reduces an array element to a single value, according the condition written
//it takes an Accumulator and Element of the array in callback function
let num = [1,2,3,4,5,6];
var sum = num.reduce((acc,e) => acc+e,0);
//0+1=1,
//1+2=3,
//3+3=6,
//6+4=10,
//10+5=15,
//15+6=21.
console.log(sum); //21

//Interview_Question: Find the maximum number in an array
let number = [10,5,25,8,30,15,90];

/*var maxi = number.reduce((max,e)=> {
        return e>max?e:max;
},number[0]);
*/
var maxi = number.reduce((max,e)=> e>max?e:max,number[0]);
console.log(maxi); //30