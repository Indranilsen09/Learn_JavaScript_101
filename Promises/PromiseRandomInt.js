const myPromise = new Promise((resolve, reject)=>
{
    //Async operation
    setTimeout(()=>
    {
        let randomInt = Math.random().toPrecision(3);
        if(randomInt > 0.5){
            resolve(randomInt);
        }else{
            reject(new Error('value is too Small....'));
        }
    });
});

myPromise.then((result)=>
    {
        console.log('Random Number is : '+ result);
}).catch(error=>{
        console.log(`Random Number is not generated Since: `+ error);
}).finally(()=>{
        console.log(`Random Number Generation is Completed`);
});