//PromiseAllSettled()



const getData = function()
{
    return new Promise((resolve,reject)=>
        {
            //Async Code
            setTimeout(()=>
                {
                    resolve("[1,2,3,4,5]");
            },4000);
        });

};

const getError =()=>{
    return new Promise((resolve,reject)=>{
        //Async Call
        setTimeout(()=>{
            reject(new Error('Error From GetError'));
        },9000);
    });
}

Promise.allSettled(
    [getData(),
    getError()])
.then(results=>{
    results.forEach(result=>{
        if(result.status==='fulfilled')
            {
                console.log('Status : '+result.status);
                console.log('Status : '+result.value);
            }
        if(result.status=='rejected'){
            console.log('Status : '+result.status);
            console.log('reason : '+result.reason);
        }
        console.log(result);
    });
});