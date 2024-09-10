//Destructuring: Destructuring is a feature in JS,which Extracts Element from Array or Object and
//Assign it to a Specific variable

const Numbers = [1,2,3];
const [a,b,c] = Numbers;
console.log(a,b,c); //1 2 3

//Now if we have more values in the Actual array lets see how it behaves
const values = [1,2,3,4,5,6,7];
const[p,q,r] = values;
console.log(p,q,r); 
//Output:
//  1 2 3 - in that case first 3 elements are assigned to p,q,r & rest is left alone

//Lets See if we can destructure an existing array to another array using spread
let Langs = ['Java','Python','C++','French','Greek','English'];
let [k,l,m,...talkLang]= Langs;

console.log('Coding Languages: '+k,l,m);
console.log('Speaking Languages: '+ talkLang);

//Output:
// Coding Languages: Java Python C++
// Speaking Languages: French,Greek,English

//Destructuring of Objects
const person = {
    name: 'John',
    age: 25,
    occupation: 'Software Engineer',
    city:''
};
const{name:naam,age:umar,occupation:kaam,city:sahar='default'} = person;
console.log(naam,umar,kaam,sahar);
//Output: John 25 Software Engineer

//Here We're Pointing the Object Property to the variable that we want to store in

