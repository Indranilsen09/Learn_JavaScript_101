/*We see Method overloading or Function Overloading in Other OOPS language eg:JAVA
We can method overload using different number of parameters/arguments, aka method signature
So We can achieve method overloading in 3 different types
1. Different Number of parameters
2. Different Types of parameters
3. Different Order of parameters

Example: Different Number of parameters
public class 
{
    static int sum(int x, int y)
    {
    return x+y;
    }
    static double sum(double x, double y)
    {
    return x+y;
    }
    static void sum(int x, int y, int z)
    {
        System.out.println( x+y+z);
    }
    static void userinfo(String name, int age)
    {
        System.out.println(name+ " is of age "+ age);
    }
    static void userinfo(int x,String name)
    {
        System.out.println(age + " years old person is "+ name); 
    }

    public static void main(String args[])
    {
        //achieving method overloading with different types of parameters
        System.out.println(sum(5,10));  //15
        System.out.println(sum(4.9,9.8)); //14.7

        //achieving function/method Overloading with different number of parameters
        sum(5,6,7); //18

        //achieving function/method overloading with different order of parameters
        userinfo("Indranil",25); //Indranil is of age 25
        userinfo(25,"Indranil"); //25 years old person is Indranil


    }
}

NOTE: Method Overloading cannot be achieving by only changing the return type ,
        method Signature needed to be distinct(different);
*/

//Now lets comeback to Function overloading in JS
//Function overloading is not possible in JavaScript. JavaScript does not support function overloading.
// Lets Declare a function

function print()
{
    console.log("hi");
}
function print(name)
{
    console.log("hi "+ name);
}
function print(name,age)
{
    console.log("hi "+ name+ " age "+ age);
}

//calling print() function
print(); //hi undefined age undefined
//as JS will Overwrite the latest Method Signature in Runtime so it omitted print(), with print(name,age)

//To check this lets reverse the order
function show(language,version)
{
    console.log("Hi "+ language+ " "+ version);
}
function show(language)
{
    console.log("Hi "+ language);
}
function show()
{
    console.log("Hi");
}


show(); //Hi 
//proved that JS decide which one to overwrite on the order its written
//here first method with signature: show(language,version) got overwritten by show(language)
//and then show(language) got overwritten by show();
//hence output log says:  Hi

//run your testcases in remote machine
//requirement : BrowserName, BrowserVersion, remoteExecution

function displayBrowserInfo(BrowserName, BrowserVersion, remoteExecution)
{
    if((typeof BrowserName==='string') && typeof(remoteExecution==='boolean') && typeof(BrowserVersion)==='number'){
            console.log(`Browser: ${BrowserName}, version : ${BrowserVersion}, remote Execution : ${remoteExecution}`);
        }

    else if(typeof BrowserName==='string' && BrowserVersion ==='number' && remoteExecution==='undefined')
        {
            console.log(`Browser: ${BrowserName}, version : ${BrowserVersion}`);
        }
        else if(typeof BrowserName==='string'){
            console.log(`Browser: ${BrowserName}`);
        }

}

//calling the displayBrowserInfo
displayBrowserInfo('chrome', 90, true); //Browser: chrome, version : 90
displayBrowserInfo('chrome', 90);
displayBrowserInfo('chrome');


