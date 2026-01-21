# 1. Initialize (if new folder)
git init
git remote add origin https://github.com/username/repo.git

# 2. Add all files
git add .

# 3. Commit
git commit -m "Add JavaScript tutorials"

# 4. Push
git push -u origin main


# JavaScript Variables & Scope (Perfect Edition) ✨

## 🎯 Variable Naming Rules
```javascript
// ✅ VALID
var a = "temp";
var _12 = "Hello World";
var $12 = "hello";
let temp = "temp";
const temp_const = "Hello World";

// ❌ INVALID - Cannot start with digit
// let 1temp = "temp";
// const 12temp = "Hello World";

📘 This README is created for learning and revision purposes.

# JavaScript Data Types

## Primitive (Pass by Value)
- Number: `let num = 100;`
- String: `"Hello"`, `'JS'`, `` `ES6` ``
- Boolean: `true/false`
- Null: `null`
- Undefined: `let x;`
- Symbol: `Symbol('key')`
- BigInt: `123n`

## Non-Primitive (Pass by Reference)
- Array: `[1,2,3]`
- Object: `{name: "John"}`
- Function: `function(){}`

**Key Demo:**
```javascript
let a=10, b=a; a+=3; // b=10 (copy)
let x=, y=x; y.pop(); // x= (same memory)

**Perfect file created!** 📁 Clean, colorful, professional, and college-project ready!


# JavaScript Operators Reference Guide 📚

**🔥 Essential for React & Frontend Development**

## Table of Contents
- [Logical Operators](#logical-operators) **`&&` `||` `!`**
- [Ternary](#ternary-operator) **`? :`**
- [Increment](#incrementdecrement-operators) **`++` `--`**
- [Best Practices](#best-practices)

## 🚀 **Logical Operators** - **MOST IMPORTANT!**

### **✅ AND (`&&`)** - *Both true required*
```javascript
let x = 10, y = 20;
if (x > 5 && **y > 5**) {  // 🔥 Both check
  console.log("**Both > 5**"); // ✅ Executes
}
*💡 Perfect for React: `{user && isAdmin && <Admin/>}`*


