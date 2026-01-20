var a= "temp";
var _12 = "Hello World";
var $12 ="hello";

//let 1temp = "temp"; // Invalid: cannot start with a digit
let temp = "temp";

//const 12temp = "Hello World"; // Invalid: cannot start with a digit
const temp_cont = "Hello World";


var c;
console.log(c); // Output: undefined

var d=10;
console.log(d); 

var b = "gautam";
console.log(b); 

var globlalVar = "I am global";

let e=23;
{
    let e=45;
    console.log("block scope : "+e)
}
function abc(){
    let e=30;
    console.log("function scope  : "+e);
}
abc();
console.log("global scope : "+e); 

console.log(temp_b);
var temp_b = 24;  

// console.log(j);
// let j = 12;

//Hoisting Imapact 
//hoisting --> when your create variable into js that break into two part first is declare 
// part that go to up and there initialization part that go down

var temp_d = 12;

//console.log(temp_e); // ReferenceError: Cannot access 'temp_e' before initialization

let temp_d_let =24;
//let variable not use befor initialization
//if you use console.log before initialization it give reference error
//Hoisting Imapact  on var,let,cont

/*
var --> hoisted and initialized with undefined.
let --> hoisted --> error
const --> hoisted --> error
*/


//Example 1
console.log(nm)
let nm = "Gautam";
//Answer Of Error
//underfined


//Example 2
console.log(bi);
var bi = "Hello";
var x = 1;
{
    var x= 2;

}
//example 3
console.log("Example 3");
var x = 1;
{
    let x= 2;
}
 console.log(x);


// Example 4
let f = 10;
{
    let a = 20;
    console.log("Inside:", f);
}
console.log("Outside:", f);

// Example 5





