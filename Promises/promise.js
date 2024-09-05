const fs = require('fs')
const myPromise = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {   
        fs.readFile('./SsyncAsync/Indra.txt',"utf-8",(error,data)=>{
            if(error)
            {
               reject(error);
            }else{
                resolve(data);
            }    
        });
    },2000);
});

myPromise.then(result=>{
    console.log(`Parsing Result....`);
    console.log(result);
}).catch(error=>{
    console.log(`Parsing Error....`);
    console.log(error);
});

new Promise((resolve,reject)=>
{

})