//Filter : Filter method takes element of the array and check condition and returns an array of elements
//that satisfy the condition.

//ExampleQuestion: Return a even number Array from an Array of integer
let nums = [0,1,2,3,4,5,6,7,8,9,10];
let evenNumbs = nums.filter((e)=> e%2===0);
console.log(evenNumbs);
//[ 0, 2, 4, 6, 8, 10 ]

//Example_Question: Return a new array of Employee whose Salary is More than 10000 & YOE is more than 2
let employees = [
    {name: "John", salary: 10000, YOE: 2},
    {name: "Mike", salary: 20000, YOE: 3},
    {name: "Alex", salary: 30000, YOE: 4},
    {name: "Sam", salary: 9999, YOE: 2.5},
    {name: "Tom", salary: 10000.1, YOE: 2.1},
];
let experiencedEmployee = employees.filter((emp)=>{
    return emp.salary >10000 && emp.YOE>2;
});

console.log(experiencedEmployee);
//Output
/*
[
  { name: 'Mike', salary: 20000, YOE: 3 },
  { name: 'Alex', salary: 30000, YOE: 4 },
  { name: 'Tom', salary: 10000.1, YOE: 2.1 }
]
 */