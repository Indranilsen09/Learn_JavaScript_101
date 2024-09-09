//Promise.All() -- Runs all the function which returns a fulfilled/Resolved Promise
//Promise.All()-- takes iterable data as Argument (eg: Array of Functions Called);

//It will only handle if-all the functions returning promises are resolved, if Any one failed,
//then it will return the first failed promise.

//Case -1;
//func1 - Returning Resolved Promise
//func2 - Returning Resolved Promise
//func3 - Returning Resolved Promise


function demoFunc1()
{
    return new Promise((resolve,reject)=>
    {
        //Async Code
        setTimeout(()=>{
            resolve('Data from DemoFunc1');
        },2000);

    });
}
function demoFunc2()
{
    return new Promise((resolve,reject)=>
    {
        //Async Code
        setTimeout(()=>{
            resolve('Data from DemoFunc2');
        },2000);

    });
}
function demoFunc3()
{
    return new Promise((resolve,reject)=>
    {
        //Async Code
        setTimeout(()=>{
            resolve('Data from DemoFunc3');
        },2000);

    });
}


Promise.all(
    [demoFunc1(),
    demoFunc2(),
    demoFunc3()]
).then((resultArray)=>
{
    console.log('Data from All the Functions: '+ resultArray);
}).catch(error=>
{
    console.log(error);
});

//Case -2
//func1 -- Returning Resolved Promise
//func2 -- Returning Rejected Promise

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

Promise.all([getData(),getError()]).
then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
});

