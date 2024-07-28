class Car{
    constructor(name,price,model,color,autoPark)
    {
        this.name= name;
        this.price= price;
        this.model=model;
        this.color = color;
        this.autoParking= autoPark;
    }
    drive(){
        console.log(`${this.name} car is driving forward`);
    }
    turnLeft(){
        console.log(`${this.name} car is driving left`);
    }
    turnRight(){
        console.log(`${this.name} car is driving right`);
    }
    reverse(){
        console.log(`${this.name} car is driving backward`);
    }
    stop(){
        console.log(`${this.name} car is stopped`);
    }
    refuel()
    {
        console.log(`${this.name} car is refueled`);
    }
    canAutoPark(){
        if(this.autoParking==true){
            console.log(`${this.name} car can auto park`);
        }else{
            console.log(`${this.name} car cannot auto park`);
        }
    }
}

const audi =new Car('Audi',100000,'520D','black',true);
audi.drive();
audi.turnLeft();
audi.canAutoPark();

console.log('-------------------------------------------------------');
const honda = new Car('Honda',110,'Civic xl','white',false);
honda.canAutoPark();

console.log('-------------------------------------------------------');
const BMW = new Car('BMW',10000,'BMW Classic','Red',true);
console.log(BMW.model);
