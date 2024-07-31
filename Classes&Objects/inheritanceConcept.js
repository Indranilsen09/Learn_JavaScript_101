//Inheritance is Supported by JavaScript, hence we can inherit child class from parent classs
//using keyword: extends and the classname, lets understand with Example

//parent class: Vehicle
class motorvehicleDept{
    constructor(make,year,)
    {
        this.make=make;
        this.year=year;
        this.chasisnumber=make+year;
    }
    getLicenceInfo(){
        return `Licence Info: IN-AB-${this.chasisnumber}`;
    }
}
class Vehicle extends motorvehicleDept{
    constructor(make,model,year)
    {
        super(make,year);
        this.make =make;
        this.model =model;
        this.year = year;
        
        
        
    }
    getInfo(){
        return `This vehicle is a ${this.make} ${this.model} and manufactured in ${this.year}`;
    }
    startEngine()
    {
        console.log("Engine Starting ...........");
    }

    stopEngine(){
        console.log("Engine Stopped .............");
    }
}

//Child-1:(sub-class) 
class Car extends Vehicle{
    constructor(make,model,year,fuelType)
    {
        super(make,model,year); //Calling the parent class constructor using Super keyword
        this.fuelType = fuelType;
    }
    displayfuelType()
    {
        console.log(`This car is a ${this.fuelType} fuel type car`);
    };
    drive()
    {
        console.log("Car is driving");
    };
}
//Child-2 : sub-class
class Bike extends Vehicle{
    constructor(make,model,year,cc)
    {   
        super(make,model,year);
        this.cc = cc;
    }
    accelerate()
    {
        console.log(`${this.make} ${this.model} is accelerating`);
    }
    drive()
    {
        console.log("Bike is driving");
    };
}

//Now lets make objects of each vehicleType class: car & bike
const honda = new Car('Honda','civic',2021,'petrol');
const yamaha = new Bike('Yamaha','FZ',2020,150);

console.log(honda.getInfo()); //This vehicle is a Honda civic and manufactured in 2021
console.log(yamaha.getInfo()); //This vehicle is a Yamaha FZ and manufactured in 2020
yamaha.accelerate(); //Yamaha FZ is accelerating
honda.drive();  //Car is driving
yamaha.drive(); //Bike is driving

console.log(honda.getLicenceInfo());