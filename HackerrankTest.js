

class staffList{
   constructor(){
    this.staff= {};
   }
 add(name,age)
 {
    if(age>20)
    {
       this.staff[name]=age;
    }else{
        throw new Error('Staff age should be greater than 20');
    }
 };

 getSize(){
    return Object.keys(this.staff).length;
 }
 remove(name){
    if(this.staff.hasOwnProperty(name)){
        delete this.staff[name];
        return true;
        
    }
    else{
        return false;
    }
 }
 printInfo(){
    console.log(this.staff);
 }

}

let arr = [1,2,3,4,5];
function minimaxSUM()
{
    for(items of arr){
    if(items> Number.MAX_SAFE_INTEGER || items<Number.MIN_SAFE_INTEGER){
        throw new Error('Integer Overflow detected');
    }
}
    let max =0; let min =arr[0];
    for(let i=0; i<arr.length;i++)
        {
            
            let newArray = arr.slice(0,i).concat(arr.slice(i+1,arr.length));
            console.log(newArray);
            let sum = newArray.reduce((acc,num)=> acc+num,0);
            if(sum>max){
                max=sum;
            }
            else{
                min=sum;
            }
        }
        console.log(max+' '+min);
}
minimaxSUM();



