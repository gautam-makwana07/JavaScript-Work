//Data Types in JavaScript
//Two Type of Data Types

//1. Primitive Data Types
let a=10;
let b=a;
a=a+3;

//non-primitive data types
let x=[1,2,3,4];
let y=x;
y.pop();//removes last element from array x as well because both x and y are pointing to same array in memory
//type:array[], object{}, function()

//String :
let str="Hello World";
str = 'Hello JavaScript';
str = `Hello ES6`;

//Number :
let num1=100;
num1=45.67;

//Boolean :
let f=true;
f=false;

//Null :
let n=null;

//Undefined :
let h; //by default undefined

//symbol :
let sym=Symbol('mySymbol');
let sym2 = Symbol('mySymbol');

//Check sym==sym2
let obj = {
    name: "John",
    age: 30
};
let sym3 = Symbol('mySymbol');
obj[sym3] = "This is a symbol property";

//BigInt :
let number = BigInt(9007199254740991);
number = number   + 6;
let num2 = 900719925470991n;
num2 + 3n;

//2. Non-Primitive Data Types
//Array :
let arr=[1,2,3,4,5];

//Object :
let person={name:"Alice", age:25};

//Function :
function name(parent){
    return "Child of " + parent;
}

//Dynamic Typing
let temp_d = "name";
temp_d = 456;
temp_d = {};

//javascript typescript

//truthy vs falsy values
//0, false, "", null, undefined, NaN --> falsy values.all,--false
//ex. !!0 -- chack value is true or false
//ex. if(null){}, js convert it into false
//ex. if(-1){}, js convert it into true
//all --> true.

