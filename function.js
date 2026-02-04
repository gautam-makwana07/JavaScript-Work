// //Function
// //whst is function? --> A function is a block of code designed to perform a particular task.
// //why --> to avoid repetition and to make code modular and reusable.
// //zhow --> Function keyword,name, parameters,body,return statement

// //type of function
// //function name(params) {} --> function declaration
// function abc() {}
// //let fnc = function(){} --> function expression
// // let fnc = () => {} --> arrow function --> fat arrow function
// let fnc = () => {};

// // function temp_cart(){
// // console.log("adding producat");

// // temp_cart("laptop");
// // temp_cart("watch");
// // temp_cart("mobile");
// //}
// //parameters vs arguments
// // parameters are the names listed in the function definition(params -- > () ni andar lakheli values)
// // arguments are the real values passed to the function (args-- > function call karti () ni andar lakheli(pass) karelivalues )

// // function cards(producat){
// // console.log(`adding ${producat}`);

// // cards("laptop");
// // cards("Mac Book");
// // cards("S25 Ultra");
// // }

// function Movies(name, price) {
//   console.log(`Movie Name: ${name} , Price: ${price}`);
//   Movies("Bahubali", 250);
//   Movies("KGF", 300);
//   Movies("Dangal", 200);
// }

// //convert into arrow function

// const Movies2 = (name, price) => {
//   console.log(`Movie Name: ${name} , Price: ${price}`);
// };
// Movies2("Bahubali", 250);

// //convert into function
// const Movies3 = function (name, price) {
//   console.log(`Movie Name: ${name} , Price: ${price}`);
// };
// Movies3("Dangal", 200);

// //default , rest parameters in functions
// //default parameters
// function abcd(b = 10, price = 1000) {
//   console.log(price, b);
//   // use case -- fees / flipkart -- platform fee
// }
// abcd(15);

// //example
// function salary(name, sal = 25000) {
//   console.log(`Employee Name: ${name}, Salary: ${sal}`);

//   if (sal > 20000) {
//     console.log("Moje dariya....");
//   } else {
//     console.log("Garib saalo....");
//   }
// }
// salary("Jayre", 2000);
// salary("Jayre", 30000);

// //rest
// // Jayre function ma multiple arguments pass karva to vadhare
// //params banava pade chhe mate te na karvu pade te mate rest
// //parameter use kariye chhiye (rest --- > ... jo funtion na
// //parameter ni anadar lakhvama aave chhe)

// function def(...numbers) {
//   console.log(numbers);
// }
// def(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// //example
// function salary2(name, ...sal) {
//   console.log(`Employee Name: ${name}, Salary: ${sal}`);
//   let total = 0;
//   for (let i of sal) {
//     total = total + i;
//   }
//   console.log(`Total Salary is: ${total}`);
// }
// salary2("Jayre", 2000, 3000, 4000);

// //early return --> function mathi jaldi bahar nikalva mate
// function getValue1(value) {
//   if (value < 25) return "Value is less than 25";
//   else if (value < 50) return "Value is less than 50";
//   else if (value < 75) return "Value is less than 75";
//   return "Value is 100 or more";

//   let result = getValue1(80);
//   console.log(result);
// }

// //first class function and their types
// //function can be treated as variable
// //let temp = function(){} --first class function
// const card5 = function (product, price) {
//   console.log(`Adding ${product} with price ${price}`);
// };
// card5("function expressio -S25 ultra", 50000);

// //function can be passed as argument to another function
// function temp_cart(product, fn) {
//   fnc();
// }
// temp_cart(function fnc2() {
//   console.log("Adding product to cart");
// });
// //function can be returned from another function

// //higher order function(HOF)
// //function  that takes another function as an argument or return a function as a result(ava  function je return kare ek function athava acpect kare ek function params ma)

// //function abcd(val)(); --> abcd(function(){console.log("hi")});
// //function abcd(val) {} --> higher order function

// function abcd(val) {
//   val();
// }

// //function abcd(){return function(){}abcd()() --> higher order function

// pure vs impure function
// pure function -- > function je same input par same output aapse ane koi bahar na state
//ne modify na kare (pure function -- > je function bahar na state ne modify na kare )
let a = 10;
function abcd_pure() {
  console.log("Hello");
}
// impure function -- > function je same input par different output aapse athava bahar na
//state ne modify kare (impure function -- > je function bahar na state ne modify kare )
function abcd_impure() {
  a++;
  console.log("value of a :", a);
}
console.log(a);

// closure function
// function je potana parent function na variables ne access kari shake(return thava
//valo function use karshe parent function na koi variable) (function within function)
function outer() {
  let count = 0;
  function inner() {
    count++; // accessing outer(parent) function variable
    console.log(count);
  }
  return inner;
}
let fnc = outer();
fnc();

//Example of closure
// function bankAccount() {
//   let balance = 1000; // outer function variable
//   function deposit(amount) {
//     balance += amount;
//     console.log("Balance:", balance);
//   }
//   return deposit;
// }
// let myAccount = bankAccount();
// myAccount(500);
// myAccount(300);

//lexical scope
// function outer1() {
//   let outerVar = "I am from outer function";
//   function inner1() {
//     let innerVar = "I am from inner function";
//     console.log(outerVar);   //outer1 function variable no console log
//     function mostInner() {
//       console.log(innerVar);
//       console.log(outerVar);
//       let mostInnerVar = "I am from most inner function";
//       function abc() {
//         console.log(mostInnerVar);
//         console.log(innerVar);
//         console.log(outerVar);
//       }
//       abc();
//     }
//     mostInner();
//   }
//   inner1();
// }
// outer1();

//LIFE -immediately iinnvoked function expression
(function () {
  console.log("this is IIFE function");
})();

// Hoisting example
abcde();

function abcde() {
  console.log("this is hoisting function");
}

// hoistedFunction1();
// let hoistedFunction1 = function () {
//console. log("Hoisted Function Expression called");

//}

//.hoistedFunction2() ;
//.let .hoistedFunction2 .=. () .= >{
//.console. log("Hoisted .Arrow.Function.called");

//Example 1 :
// Function Declaration
sayHello(); // ✅ Works

function sayHello() {
  console.log("Hello");
}
const sayHi = function () {
  console.log("Hi");
};


//Example 2 :
greet();

function greet() {
  console.log("Hello!");
}

//example 3 :
function add(a, b) {
  return a + b;
}
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 3));


// Example 4 :
function welcome(name) {
  // parameter
  console.log("Welcome " + name);
}

welcome("user"); // argument

// Example 5 :
function temp(a, b, c) {
  console.log(a, b, c);
}

temp(1, 2);

//Example 6 :
function temp_user(name = "Guest") {
    console.log("Hello " + name);
}

temp_user();


//Example 7 :
function number(...numbers) {
    console.log(numbers);
}

number(1, 2, 3, 4, 5);


//Example 8 :
function calculateTotal(...scores) {
    let total = 0;
    for (let i = 0; i <= scores.length; i++) {
        total += scores[i];
    }
}


//Example 9 :
function checkAge(age) {
    if (age < 18) {
        return "Too Young";
    }
    return "Access Granted";
}

console.log(checkAge(16));


//Example  10 :
function f() {
    return;
}

console.log(f());