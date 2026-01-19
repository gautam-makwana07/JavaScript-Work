# JavaScript Variables, Scope & Hoisting

This project explains **JavaScript variable naming rules**, **scope**, and **hoisting behavior** using simple examples from `script.js`.

---

## 📌 Variable Naming Rules
```js
var a = "temp";
var _12 = "Hello World";
var $12 = "hello";
```

✔ Valid variable names can start with:

* Letters (`a-z`, `A-Z`)
* Underscore (`_`)
* Dollar sign (`$`)

❌ Invalid variable names:

```js
// let 1temp = "temp";  // Cannot start with a digit
// const 12temp = "Hello World"; // Invalid
```

---

## 📌 Variable Declaration

```js
var c;
console.log(c); // undefined
```

* Variables declared using `var` are automatically initialized with `undefined`.

```js
var d = 10;
var b = "gautam";
```

---

## 📌 Scope in JavaScript

### 🌍 Global Scope

```js
let e = 23;
console.log("global scope : " + e);
```

Accessible everywhere in the file.

---

### 📦 Block Scope (`let`)

```js
{
    let e = 45;
    console.log("block scope : " + e);
}
```

* `let` variables are **block scoped**
* Not accessible outside `{ }`

---

### 🔧 Function Scope

```js
function abc(){
    let e = 30;
    console.log("function scope : " + e);
}
abc();
```

* Variables inside a function are accessible only within that function.

---

## 📌 Hoisting in JavaScript

Hoisting means JavaScript moves **variable declarations** to the top of the execution context.

---

### 🔹 Hoisting with `var`

```js
console.log(temp_b);
var temp_b = 24;
```

✔ Output:

```
undefined
```

Reason:

* `var` is hoisted and initialized with `undefined`

---

### 🔹 Hoisting with `let`

```js
// console.log(j);
// let j = 12;
```

❌ Error:

```
ReferenceError: Cannot access 'j' before initialization
```

Reason:

* `let` is hoisted but not initialized
* Exists in **Temporal Dead Zone (TDZ)**

---

### 🔹 Hoisting with `const`

```js
// console.log(temp_e);
// const temp_e = 20;
```

❌ Same behavior as `let`

* Must be declared and initialized together

---

## 📊 Hoisting Comparison Table

| Keyword | Hoisted | Initialized | Accessible Before Declaration |
| ------- | ------- | ----------- | ----------------------------- |
| var     | ✅ Yes   | ✅ undefined | ✔ Yes                         |
| let     | ✅ Yes   | ❌ No        | ❌ No                          |
| const   | ✅ Yes   | ❌ No        | ❌ No                          |

---

## ✅ Key Points

* Prefer `let` and `const` over `var`
* `let` → block scoped
* `const` → block scoped & cannot be reassigned
* Avoid using variables before initialization
* Understanding hoisting prevents runtime errors

---

## 📁 Project Structure

```
project-folder/
│
├── script.js
└── README.md
```

---

📘 This README is created for learning and revision purposes.

