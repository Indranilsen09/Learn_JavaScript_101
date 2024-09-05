const fs = require('fs');

let data = fs.readFileSync('./SyncAsync/Indra.txt',"utf-8");
console.log(data);
console.log('Bye Indra');
