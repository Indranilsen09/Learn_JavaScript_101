//There are 5 ways you can create or Write Objects, Namely,
//1. Object Literals : Using curly braces {}- They Typical way
//2. Constructer Functions : using function, this and new keyword
//3. Object.create() : Using Object.create() method using prototype
//4. Class : creating class using class & constructor keyword.
//5. Factory Function : Using function and return keyword. Similar to constructer function
//Let us See  one by one

//1. Object Literals : Declaring Objects using curly braces and variables

let user = {
        name: "Michael",
        age : 25,
        country: 'USA',
        occupation: "Software Engineer",
}

//So we created an object with key- name,age,country & occupation,
//Now we'll access the value from it using the var and dot operator

console.log(user.name); //Michael
console.log(user.country); //USA
//Now we will try to add function in the Object 

let user1 = {
    name: "Mike",
    eat: function()
    {
        console.log(`${this.name} is eating`);
    }
}
//try to access the function using the key:eat
user1.eat(); //Mike is eating

//Now Moving onto Second Way of Declaring Object using Constructor Function
//Constructor Function: using function, this and new keyword
//Syntax function objectName(params){   this.key=param(this is setting key and value for the object)}
//here this.Key =value;

   function car(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

//Now lets create objects using new keyword and assign it to variable for accessing

const familycar = new  car("Maruti",'black',10000);
let sportscar = new car('Audi','red',50000);

//let access the object value using var and dot operator
//syntax : varName.keyName

console.log(familycar.brand); //Maruti
console.log(sportscar.price); //50000

//Moving onto third way of declaring object
//Object.create(): Using Object.create() method using object prototype

const employeePrototype = 
{
    companyName:"Infosys",
   printRole:function(){
        console.log(`${this.name} is working as ${this.role} in ${this.companyName}`);
    },
    printYOE:function(){
        console.log(`${this.name} has an experience of ${this.YOE} & is in Job level ${this.Joblevel}`);
    },
    Joblevel:3,
    aspiration: 'SDET',
}
//Now lets create object using Object.create() method and assign it to variable for accessing
let emp1 = Object.create(employeePrototype);
//Now Setting up the value to the keys which are undefined- name,role and YOE
emp1.name='Indranil';
emp1.role='QA';
emp1.YOE='2.5 years';

//Now lets call the functions using keys and access the value;
emp1.printRole(); //Indranil is working as QA
emp1.printYOE();


//Now lets Move on to 4th way of declaring object
//Class Style: Using class Keyword & constructor keyword to define the objects
class amazon 
{
    constructor(name,product)
    {
        this.name= name;
        this.product = product;
        let products = ['product'];

    }
    //method
    addToCart()
    {
        console.log(`${this.product} is added to Cart`);
    }
    purchase(){
        console.log(`${this.product} purchased successfully`);
    }
}
//Now lets create an object using new keyword and assign it to variable for accessing
let customer1 = new amazon("Indranil","Iphone");
console.log("printing the customer and purchase: "+ customer1.name+ " is Buying "+ customer1.product);
//OutputL: printing the customer and purchase: Indranil is Buying Iphone
//Now lets call the functions using keys and access the value;
customer1.addToCart(); //Iphone is added to Cart
customer1.purchase(); //Iphone purchased successfully


//Last way to Declare Object is Factory function: told you similar to constructor function
//Syntax function objectName(params)
/*{
    return{
        //Instead of this.key =param(value);
        we use this return block to set key value
        key: params(value),
    }
}*/

//Catch is this returns object and Allow you to create multiple instances of it
function createDepartment(deptName,hod,age=60)
{
    return{
        deptName:deptName,
        hod: hod,
        age: age,
        getDeptInfo: function()
        {
            const self = this;
            giveDeptInfo = () => console.log(`${self.hod} is HOD of Deparment : ${self.deptName}`);
            giveDeptInfo();
        },
        getHODinfo:function()
        {
            let check = this;   
            if(check.hod==='R D Sharma')
                {
                    check.age =75;
                }
                //IIFE
            (
                function()
                {
                    console.log(`${check.hod} is of ${check.age} age`);
                }
            )();
        }
        
    }
}

let dept1 = new createDepartment("Physics","H C Verma");
dept1.getDeptInfo(); //H C Verma is HOD of Deparment : Physics
dept1.getHODinfo(); //H C Verma is of 60 age

let dept2 = new createDepartment("Maths","R D Sharma");
dept2.getHODinfo();


