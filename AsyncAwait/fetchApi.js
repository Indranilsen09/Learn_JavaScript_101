const fetchUserInfo = async function()
{
    const data = (await fetch('https://reqres.in/api/users?page=2'));
    let json;
    if(data.status=='200'){
        json =  await data.json();
        body = await data.body.getReader;
    }else{
        throw new Error('Status Not OK');
    }
    console.log(json);
   
   let headers = data.headers.entries();
   for(item of headers){
    console.log(item);
   }
  
    console.log(data.ok);
    console.log(data.redirected);
    console.log(data.status);
    console.log(data.statusText)
    console.log(data.text);
    console.log(data.type);
    console.log(data.bodyUsed);
}

fetchUserInfo();





