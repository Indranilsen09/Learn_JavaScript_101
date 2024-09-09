function startCoffeeMachine()
{
   
    return new Promise((resolve,reject)=>
    {
        
        setTimeout(()=>
            {
                console.log('Starting the coffee machine......');
                
                resolve('Coffee machine is ready');
            },2000); //2sec
    });  
};

function grindCoffee()
{
   
    return new Promise((resolve,reject)=>
    { console.log('Grinding Coffee Beans.....');
        setTimeout(()=>
            {
                let coffeeAmt = '20mg';
                console.log('Coffee beans are grounded & ready');
                resolve(coffeeAmt);
            },2000) //1Sec
    });
   

}

function BoilWater()
{
   
    return new Promise((resolve,reject)=>{
        console.log('Boiling Water.....');
        setTimeout(()=>
        {
            let BoiledwaterAmt = 100
            console.log('Water Boiled.....');
            resolve(BoiledwaterAmt);
        },8000);});
    
}
function pourBoiledWaterIntoCup(boiledwaterAmount)
{
  
    return new Promise((resolve,reject)=>
    {
        console.log('Pouring Boiled Water into a Cup.......');
        setTimeout(()=>
            {
               
                resolve(boiledwaterAmount+ ' is poured into the cup');
               
            },3000); //2 Sec
    });
   
}

function addGroundCoffeetoCup(groundCoffee)
{
    
    return new Promise((resolve,reject)=>
    {
        console.log('Adding Ground Coffee to the cup....');
        setTimeout(()=>
            {
                
                resolve(groundCoffee+ ' added in the cup');
            },2000);  //1 Sec
    })

}

function stirTheCoffee()
{
    
    return new Promise((resolve,reject)=>
    {
        console.log('Stirring the Coffee.....');
        setTimeout(()=>
            {
                let CoffeeMl = 150;
                console.log('Coffee Stirred: '+ CoffeeMl+' ml')
                resolve(CoffeeMl);
            },2000); //2 Sec
    });
}

function EnjoyCoffee(CoffeeAmount)
{
    
    return new Promise((resolve,reject)=>{
        console.log('Making the coffee Enjoyable......');
        setTimeout(()=>
            {
                
                resolve('Espresso of:'+ CoffeeAmount+ " is ready....");
        },1000);
    });
}


startCoffeeMachine()
    .then(result=>
    {
        console.log(result);
        
        return grindCoffee();
    })
    .then(result=>{
        const coffeeAmt= result;
        
        return BoilWater();
    })
    .then(result=>{
        
        return pourBoiledWaterIntoCup(result);
    })
    .then(result=>{
        console.log(result);
        return addGroundCoffeetoCup('20mg');
    })
    .then(result=>{
        console.log(result);
        return stirTheCoffee();
    })
    .then(result=>{
        const coffeeAmntsj= result;
        return EnjoyCoffee(coffeeAmntsj+'ml');
    }).then(result=>{
        console.log(result);
    }).catch(error=>{
        console.log(error);
    });