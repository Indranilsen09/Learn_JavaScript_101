/* Object Comparison can be Done in 3 methods 
    1. == or ===
    2. Object.is(param1,param2);
    3. JSON.stringify(objectName) == JSON.stringify(objectName);
*/

let Animal = new Object();

let cat = Animal;
let dog = Animal;
console.log(cat == dog); // true // Since its pointing to the same reference
console.log(cat === dog); // true // Since its pointing to the same reference

//Now let us create a different Object
let Horse = new Object();
console.log(cat == Horse); // false // Since its pointing to different reference


//Now in order to compare to Object properties
let Animal1 = new Object();
Animal1.name = "Doggo";
Animal1.color = "Black";
Animal1.age = 5;


let Lion = new Object();
Lion.name = "Lion";
Lion.color = "Yellow";
Lion.age = 5;

JSON.stringify(Lion) == JSON.stringify(Animal1);
console.log(JSON.stringify(Lion));
console.log(JSON.stringify(Animal1));
