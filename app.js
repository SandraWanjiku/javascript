//functional expression

/*let netSalary = function(grossSalary, payePercentage) {
  let salary = grossSalary*payePercentage;
  console.log(salary);
}
netSalary(50000, 0.75);

var grade = 60
if(grade<40){
    console.log (`fail`)
}
else if(grade>=40 && grade<69){
    console.log(`2nd class`)
}
else if(grade>=70){
    console.log(`1st class`)
}
//objects
let person ={
    gender:'female',
    height: 165,
    age: 22,
    hello: function (){
        console.log(`hello world`)
    }
}
console.log (person.hello())
*/
//loops (for loop, do while, while, switch statements, for in)

/*let dice =1
 switch(dice){
    case 1:
        console.log('you got one')
    
    case 2:
        console.log('you got two')
    
    case 3:
        console.log('you got three')
            
    case 4:
        console.log('you got four')
                
    case 5:
        console.log('you got five')
                
    case 6:
        console.log('you got six')
        break;

 } */

 //higher order functions
 //callback function
 //function as a first class citizen

 let employee = [
    {name:'Sandra', age:22, salary:30000},
    {name:'John', age:25, salary:35000},
    {name:'Rita', age:23, salary: 25000},
    {name:'Ian', age:23, salary: 24000},
    {name:'Frank', age:23, salary: 27000}
 ]
 //console.log (employee.salary)
//callback function:
 function helloWorld (){
    console.log ('hello world')
 }
//higher order function:
function js (cb){
    
    console.log('learning java script')
    cb()
    console.log('learning java script')
    console.log('learning java script')
    console.log('learning java script')
    cb()
}
js(helloWorld)