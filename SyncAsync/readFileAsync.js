const ds = require('fs');
ds.readFile('./SyncAsync/Indra.txt',"utf-8",(error,data)=>
    {
        
    console.log(data);
});

console.log(`Bye Indra`);