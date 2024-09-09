//Start the coffee Machine - 2 Sec
//Grind the Coffee Beans - 1 Sec
//Boil Water - 5 Sec
//Pour the Boiling Water into a Cup - 2 Sec
//Add Grounded Coffee into the cup - 1 Sec
//Stir the coffee - 2 Sec
//Enjoy the Coffee

function startCoffeeMachine(callback)
{
    console.log('Starting the Coffee Machine....');
    setTimeout(()=>
        {
            console.log('Coffee machine is ready');
            callback('Coffee Machine is ready');

        },2000); //2sec
}

function grindCoffee(callback)
{
    console.log('Grinding Coffee Beans.....');
    setTimeout(()=>
        {
            console.log('Coffee beans are grounded');
            callback('Coffee beans Grounded');
        },1000) //1Sec

}

function BoilWater(callback)
{
    console.log('Boiling Water.....');
    setTimeout(()=>
        {
            console.log('Water Boiled......');
            callback('Boiled Water');
        },5000);
}
function pourBoiledWaterIntoCup(boiledWater,callback)
{
    console.log('Pouring Boiled Water into a Cup.......');
    setTimeout(()=>
    {
        console.log('Boiled Water is in the cup');
        callback(boiledWater+ ' : Boiled water in a cup');
    },2000); //2 Sec
}

function addGroundCoffeetoCup(groundCoffee,callback)
{
    console.log('Adding Ground Coffee to the cup....');
    setTimeout(()=>
    {
        console.log('Ground Coffee is in the cup');
        callback(groundCoffee + ' in a cup');

    },1000);  //1 Sec

}

function stirTheCoffee(coffeeinCup,callback)
{
    console.log('Stirring the Coffee.....');
    setTimeout(()=>
    {
        console.log('Coffee is Stirred.');
        callback('Espresso Ready');
    },2000); //2 Sec
}

function EnjoyCoffee(CoffeeAmount,callback)
{
    console.log('Making the coffee Enjoyable......');
    setTimeout(()=>
        {
            console.log('Espresso of:'+ CoffeeAmount+ " is ready....");
            callback('Enjoying my coffee....');
    },1000);
}


//callback hell: Pyramid of DOOM!!
startCoffeeMachine(function coffeeMachineStatus()
{
    grindCoffee(function groundCoffee()
    {
        BoilWater(function WaterBoiling()
        {
            pourBoiledWaterIntoCup('50ml', function waterInCup()
            {
                addGroundCoffeetoCup('20mg',function groundedCoffeeinCup()
                {
                    stirTheCoffee('100ml', function stirredCoffee()
                    {
                        EnjoyCoffee('100ml',function coffeEnjoy()
                        {
                             
                        });
                    });
                });
            });
        });
    });

});

