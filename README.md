# JavaScript Functions Examples 🚀

## 📚 Overview

This repository contains a comprehensive collection of JavaScript function examples, designed to help beginners and intermediate developers understand various types of functions, their syntax, and use cases. The `function.js` file demonstrates key concepts such as function declarations, expressions, arrow functions, parameters, rest parameters, closures, and more.

## 🛠️ Getting Started

1. **Clone the repository** to your local machine.
2. **Open `index.html`** in your preferred web browser.
3. **Open the Developer Console** (F12 or Right Click -> Inspect -> Console) to view the output of the scripts.
4. **Run the Examples**: Uncomment the `<script src="function.js"></script>` tag in `index.html` to execute the function examples.

## 📖 Table of Contents

- [What is a Function?](#-what-is-a-function)
- [Types of Functions](#-types-of-functions)
- [Parameters vs Arguments](#-parameters-vs-arguments)
- [Default Parameters](#-default-parameters)
- [Rest Parameters](#-rest-parameters)
- [Early Return](#-early-return)
- [First-Class Functions](#-first-class-functions)
- [Higher-Order Functions (HOF)](#-higher-order-functions-hof)
- [Pure vs Impure Functions](#-pure-vs-impure-functions)
- [Closures](#-closures)
- [Lexical Scope](#-lexical-scope)
- [Immediately Invoked Function Expressions (IIFE)](#-immediately-invoked-function-expressions-iife)
- [Hoisting](#-hoisting)
- [Examples](#-examples)

---

## ❓ What is a Function?

A function is a block of code designed to perform a particular task. Functions help avoid repetition, make code modular, and reusable.

### How to Define a Function

- **Function Keyword**: `function`
- **Name**: Identifier for the function
- **Parameters**: Placeholders for inputs (optional)
- **Body**: Code to execute
- **Return Statement**: Optional value to return

```javascript
function exampleFunction(param1, param2) {
  // Function body
  return result;
}
```

---

## 🔧 Types of Functions

### 1. Function Declaration

Defined using the `function` keyword. Can be called before declaration due to hoisting.

```javascript
function abc() {
  console.log("Function Declaration");
}
abc();
```

### 2. Function Expression

Assigned to a variable. Not hoisted.

```javascript
let fnc = function() {
  console.log("Function Expression");
};
fnc();
```

### 3. Arrow Function (ES6)

Shorter syntax, no `this` binding.

```javascript
let fnc = () => {
  console.log("Arrow Function");
};
fnc();
```

---

## 📝 Parameters vs Arguments

- **Parameters**: Names listed in the function definition (e.g., `name`, `price` in `function Movies(name, price)`).
- **Arguments**: Real values passed to the function when called (e.g., `"Bahubali"`, `250`).

```javascript
function Movies(name, price) {
  console.log(`Movie Name: ${name}, Price: ${price}`);
}
Movies("Bahubali", 250); // Arguments
```

---

## 🔢 Default Parameters

Allows setting default values for parameters if no argument is provided.

```javascript
function abcd(b = 10, price = 1000) {
  console.log(price, b);
}
abcd(15); // Output: 1000 15
```

**Example: Salary Function**

```javascript
function salary(name, sal = 25000) {
  console.log(`Employee Name: ${name}, Salary: ${sal}`);
  if (sal > 20000) {
    console.log("Moje dariya....");
  } else {
    console.log("Garib saalo....");
  }
}
salary("Jayre", 2000); // Uses default? No, passed 2000
salary("Jayre", 30000);
```

---

## 🌟 Rest Parameters

Allows a function to accept an indefinite number of arguments as an array using `...`.

```javascript
function def(...numbers) {
  console.log(numbers);
}
def(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]
```

**Example: Salary with Multiple Salaries**

```javascript
function salary2(name, ...sal) {
  console.log(`Employee Name: ${name}, Salaries: ${sal}`);
  let total = 0;
  for (let i of sal) {
    total += i;
  }
  console.log(`Total Salary: ${total}`);
}
salary2("Jayre", 2000, 3000, 4000);
```

---

## 🚪 Early Return

Return from a function early to avoid deep nesting and improve readability.

```javascript
function getValue1(value) {
  if (value < 25) return "Value is less than 25";
  if (value < 50) return "Value is less than 50";
  if (value < 75) return "Value is less than 75";
  return "Value is 100 or more";
}
console.log(getValue1(80));
```

---

## 🎯 First-Class Functions

Functions can be treated as variables, passed as arguments, or returned from other functions.

```javascript
const card5 = function (product, price) {
  console.log(`Adding ${product} with price ${price}`);
};
card5("S25 Ultra", 50000);
```

---

## 🔄 Higher-Order Functions (HOF)

Functions that take other functions as arguments or return functions.

```javascript
function abcd(val) {
  val(); // Takes function as argument
}
abcd(() => console.log("Hi"));
```

---

## 🧹 Pure vs Impure Functions

### Pure Function

Always returns the same output for the same input and doesn't modify external state.

```javascript
function abcd_pure() {
  console.log("Hello"); // No external modification
}
```

### Impure Function

May produce different outputs or modify external state.

```javascript
let a = 10;
function abcd_impure() {
  a++; // Modifies external variable
  console.log("Value of a:", a);
}
```

---

## 🔒 Closures

A function that has access to its outer (enclosing) function's variables even after the outer function has returned.

```javascript
function outer() {
  let count = 0;
  function inner() {
    count++; // Accesses outer variable
    console.log(count);
  }
  return inner;
}
let fnc = outer();
fnc(); // Output: 1
fnc(); // Output: 2
```

**Example: Bank Account**

```javascript
function bankAccount() {
  let balance = 1000;
  function deposit(amount) {
    balance += amount;
    console.log("Balance:", balance);
  }
  return deposit;
}
let myAccount = bankAccount();
myAccount(500);
myAccount(300);
```

---

## 📍 Lexical Scope

Variables are accessible based on their position in the code hierarchy.

```javascript
function outer1() {
  let outerVar = "I am from outer function";
  function inner1() {
    let innerVar = "I am from inner function";
    console.log(outerVar); // Can access outerVar
    function mostInner() {
      console.log(innerVar); // Can access innerVar
      console.log(outerVar); // Can access outerVar
    }
    mostInner();
  }
  inner1();
}
outer1();
```

---

## ⚡ Immediately Invoked Function Expressions (IIFE)

Functions that are executed immediately after definition.

```javascript
(function () {
  console.log("This is an IIFE function");
})();
```

---

## ⬆️ Hoisting

Function declarations are moved to the top of their scope during compilation.

```javascript
abcde(); // Works due to hoisting

function abcde() {
  console.log("This is a hoisted function");
}
```

Function expressions and arrow functions are not hoisted.

---

## 📋 Examples

### Example 1: Function Declaration

```javascript
sayHello(); // ✅ Works

function sayHello() {
  console.log("Hello");
}
```

### Example 2: Function Expression

```javascript
const sayHi = function () {
  console.log("Hi");
};
sayHi();
```

### Example 3: Arrow Function

```javascript
function add(a, b) {
  return a + b;
}
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 3)); // Output: 8
```

### Example 4: Parameters and Arguments

```javascript
function welcome(name) {
  console.log("Welcome " + name);
}
welcome("user"); // Argument: "user"
```

### Example 5: Default Parameters

```javascript
function temp_user(name = "Guest") {
  console.log("Hello " + name);
}
temp_user(); // Output: Hello Guest
```

### Example 6: Rest Parameters

```javascript
function number(...numbers) {
  console.log(numbers);
}
number(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]
```

### Example 7: Early Return

```javascript
function checkAge(age) {
  if (age < 18) {
    return "Too Young";
  }
  return "Access Granted";
}
console.log(checkAge(16)); // Output: Too Young
```

### Example 8: IIFE

```javascript
(function () {
  console.log("IIFE executed");
})();
```

---

## 📝 Git Commands Reference

Quick reference for managing this project with Git:

```bash
# Initialize a new repository
git init

# Add files to staging
git add .

# Commit changes
git commit -m "Your commit message"

# Push to remote
git push -u origin main
```

---

_Created for learning and revision purposes of JavaScript functions._ 🌟
