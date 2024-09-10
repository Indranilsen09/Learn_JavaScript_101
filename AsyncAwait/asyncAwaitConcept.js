//Async Function Without await
async function myFunction() 
{
    console.log('This is Async function without AwaitStep')
    return 42; //Returning a resolved promise
}

myFunction().then(result=>{
    console.log(`result from Async Function : ${result}`);
})

//ASync function without Await but returning an error

async function f2()
{
    console.log('This is Async function with reject promise without AwaitStep');
   // throw new Error('Error from f2');
}

f2().catch(error=>{
    console.log(`Error from f2 : ${error}`);
});

//Async Function with a resolved promise

async function f3()
{
    return new Promise((resolve,reject)=>
    {
        const random = Math.random();
        setTimeout(()=>{
            if(random<=0.5)
                {
                    resolve('Number OK');
                }else{
                    reject(new Error('Number is Not OK'));
                }
        },2000);
    });
};

async function f4()
{
    try{
    const num = await f3();
    console.log(num);
    }catch(error){
        console.log(error);
    }
}
f4();