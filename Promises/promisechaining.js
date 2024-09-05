function getEvenNum(value, delay)
{
    //returning promise
    return new Promise((resolve,reject)=>
    {
        //Async Code
        setTimeout(()=>
        {
            if(value %2==0)
                {
                    resolve(value);
                }else {
                    reject(new Error('The Number is Not Even'));
                }
        },delay);

    });
}

function generateRandomNumber(max,delay)
{
    return new Promise((resolve,reject)=>
    {
     setTimeout(()=>
        {
            let min= 10;
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(randomNumber);
            if(randomNumber>0)
            {
                resolve(randomNumber);
            }else 
            {
                reject(new Error('Number is too Small'));
            }
        },delay);

    });
}

generateRandomNumber(1000,3000)
        .then(result=>
        {
            console.log('Random number Generated..'+ result);
            console.log(`Let's Find out if thats a Even Number or Not`);
            return getEvenNum(result,2000);
        })
        .then(result=>
        {
            console.log('Voila!! Thats an Even Number: '+ result);
        }).catch(error=>{
            console.log('Promise Chain error: '+ error);
        });