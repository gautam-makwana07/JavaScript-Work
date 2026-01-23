# JavaScript Learning Journey 🚀

## 📚 Overview

This repository contains a comprehensive collection of JavaScript concepts, examples, and exercises designed to help beginners master the core fundamentals of JavaScript. Each file focuses on a specific topic, providing clear examples and explanations.

## 🛠️ Getting Started

1. **Clone the repository** to your local machine.
2. **Open `index.html`** in your preferred web browser.
3. **Open the Developer Console** (F12 or Right Click -> Inspect -> Console) to view the output of the scripts.
4. **Select a Topic**: Open `index.html` in a code editor and uncomment the `<script>` tag for the topic you want to explore (e.g., `<script src="function.js"></script>`).

## 📖 Table of Contents

- [Variables](#-variables)
- [Data Types](#-data-types)
- [Operators](#-operators)
- [Control Flow](#-control-flow)
- [Loops](#-loops)
- [Functions](#-functions)

---

## 📊 Variables

**File:** `script.js`

Understanding how to declare and manage variables in JavaScript, including scoping and hoisting.

### Variable Declarations

- **var**: Function-scoped, can be redeclared and updated. Hoisted to the top of the function.
- **let**: Block-scoped, can be updated but not redeclared. Hoisted but not initialized (Temporal Dead Zone).
- **const**: Block-scoped, cannot be updated or redeclared. Must be initialized at declaration.

```javascript
var a = "Hello"; // Function scope
let b = 10; // Block scope
const c = true; // Block scope, immutable
```

### Hoisting

- **var**: Hoisted and initialized with `undefined`.
- **let/const**: Hoisted but not initialized, causing ReferenceError if accessed before declaration.

```javascript
console.log(x); // undefined (var is hoisted)
var x = 5;

console.log(y); // ReferenceError (let is hoisted but not initialized)
let y = 10;
```

### Scoping

- **Global Scope**: Accessible everywhere.
- **Function Scope**: Accessible within the function.
- **Block Scope**: Accessible within the block (let/const).

```javascript
if (true) {
  var globalVar = "global";
  let blockVar = "block";
}
console.log(globalVar); // "global"
console.log(blockVar); // ReferenceError
```

---

## 🧬 Data Types

**File:** `datatype.js`

Understanding the fundamental building blocks of JavaScript data handling.

### Primitive Types (Pass by Value)

- **Number**: Integers and floating-point numbers (e.g., `100`, `45.67`).
- **String**: Text data enclosed in quotes (e.g., `"Hello"`, `'JS'`, `` `Template Literal` ``).
- **Boolean**: Logical values (`true`, `false`).
- **Null**: Represents the intentional absence of any object value.
- **Undefined**: A variable that has not been assigned a value.
- **Symbol**: Unique and immutable primitives.
- **BigInt**: Integers too large to be represented by the Number primitive.

### Non-Primitive Types (Pass by Reference)

- **Array**: Ordered lists of values (e.g., `[1, 2, 3]`).
- **Object**: Key-value pairs (e.g., `{ name: "John", age: 30 }`).
- **Function**: Blocks of code designed to perform a task.

### Truthy and Falsy Values

- **Falsy Values**: `0`, `false`, `""`, `null`, `undefined`, `NaN`.
- **Truthy Values**: All other values, including non-empty strings, numbers (except 0), objects, arrays.

```javascript
// Examples
if (0) {
  console.log("Truthy");
} else {
  console.log("Falsy");
} // Falsy
if ("Hello") {
  console.log("Truthy");
} else {
  console.log("Falsy");
} // Truthy
```

---

## 🧮 Operators

**File:** `operator.js`

A detailed reference guide to performing operations on variables and values.

- **Arithmetic**: `+`, `-`, `*`, `/`, `%` (Modulus), `**` (Exponentiation).
- **Comparison**:
  - Loose: `==`, `!=` (Checks value only)
  - Strict: `===`, `!==` (Checks value AND type - **Recommended**)
  - Relational: `>`, `<`, `>=`, `<=`
- **Logical**:
  - `&&` (AND): Returns true if both operands are true.
  - `||` (OR): Returns true if at least one operand is true.
  - `!` (NOT): Inverts the boolean value.
- **Assignment**: `=`, `+=`, `-=`, `*=`, etc.
- **Ternary Operator**: A shorthand for `if-else`.
  ```javascript
  let status = age >= 18 ? "Adult" : "Minor";
  ```

---

## 🔀 Control Flow

**File:** `controllers.js`

Managing the decision-making logic within your application.

- **If-Else Statements**: Execute code based on conditions.
- **Switch Statements**: Select one of many code blocks to be executed.
- **Early Return Pattern**: A best practice to keep code clean by returning from a function as soon as a condition is met, avoiding deep nesting.

```javascript
// Early Return Example
function checkScore(score) {
  if (score > 90) return "Grade A";
  if (score > 80) return "Grade B";
  return "Grade C";
}
```

---

## 🔄 Loops

**File:** `loops.js`

Techniques for iterating over data and executing code repeatedly.

- **For Loop**: Best when you know how many times to loop.
- **While Loop**: Loops through a block of code as long as a specified condition is true.
- **Do-While Loop**: Similar to while, but guarantees the code block is executed at least once.
- **Break & Continue**:
  - `break`: Exits the loop entirely.
  - `continue`: Skips the current iteration and proceeds to the next one.

---

## 𝑓 Functions

**File:** `function.js`

Modularizing code for reusability and better organization.

### Types of Functions

1. **Function Declaration**:
   ```javascript
   function greet() { ... }
   ```
2. **Function Expression**:
   ```javascript
   let greet = function() { ... };
   ```
3. **Arrow Function (ES6)**:
   ```javascript
   let greet = () => { ... };
   ```

> **Key Concept**: **Parameters** are the placeholders in the function definition, while **Arguments** are the actual values passed when calling the function.

### Default Parameters

Functions can have default values for parameters if no argument is provided.

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"
```

### Rest Parameters

Allows a function to accept an indefinite number of arguments as an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
```

### Higher-Order Functions

Functions that take other functions as arguments or return functions.

```javascript
// Function as argument
function applyOperation(a, b, operation) {
  return operation(a, b);
}
const add = (x, y) => x + y;
console.log(applyOperation(5, 3, add)); // 8

// Function returning function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
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

_Created for learning and revision purposes._ 🌟
