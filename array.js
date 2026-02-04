// // Array -- Hold multiple values at same time
// // [1, 2, 3, 4, 5]
// // ["Hello", "a", "B", "C"]
// // [2, "Bye", "Hello", 50]

// // create
// // define a variable = [multiple values]
// let arr = [1, 2, 3, 4];

// // access
// // position = [0 1 2 3]
// // access
// // array_name [position]
// // arr[3], arr[2], arr[10]


// //modify
// //array_name[position]=new value
// // arr=[0]100


// // Array Methods: (variable_name.method_name)
// // push, pop, shift, unshift, splice, slice, reverse,sort
// // push -- > enter new value into array -- place itinto last
// arr.push(5);
// // variable | | function.method -- > koi variable ke
// //function in pachhal dot(.) kari ne lakho to te methodkevai
// // use case -- enter new producats into existing product list

// let chocolate_product=["KitKat","FiveStar","Pulse","DairyMilk","Melody"]
// console.log(chocolate_product)

// //pop --> remove last value
// arr.pop()

// //use case  -->remove last product you add into your list.
// //shift --> remove fisrt value into array
// arr.shift()
// //use case --> remove ald products automatic after sometimes

// //unshift -- add values into arry --fisrt
// arr.unshift(10)

// //splice --> remove values into array --specific position and specific number odf value
// let e=[50,12,34,45,56,67,89];
// // e.splice(3,4);
// // slice - copy values from array -- specific
// //position and specific number of values
// // new variable = array_name.slice(start index, end index)
// // start index -- include into copy
// // end index -- not include into copy
// let f = [100, 50, 25, 0];
// let new_f = f.slice(1, 3);
// // use case -- copy specific data and save it into new variable

// //reverse --> reverse value of array
// let g=[12,34,56,67,23,57];
// g.reverse();
// //use case --> show latest update first into your frontend 
// //sort --> set into ascending order
// let h=[50,10,20,40,60];
// h.sort();

// let v= [11,22,44,77,88];
// let sr = v.sort(function(a,b)
// {
//     return a-b; //assending order
// })

// // ==========================Excesice===========================
// // Q1. push()
// // You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
// let tasks = ['Wake up', 'Brush teeth'];
// tasks.puch("Buy Milk")

// // Q2. pop()
// // Remove the last notification from the notifications array.
// let notifications = ['Email', 'Message', 'Reminder'];
// notifications.pop()

// // Q3. shift()
// // A queue system removes the first customer. Remove the first customer.
// let customers = ['Customer1', 'Customer2', 'Customer3'];
// customers.shift()

// // Q4. unshift()
// // A new song is added to the beginning of the playlist.
// let playlist = ['Song B', 'Song C'];
// playlist.unshift("Song A")

// // Q5. splice()
// // In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
// let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// students.splice(1,1,"john","sara")


// // Q6. splice()
// // From the menu, remove 2 items starting from index 1.
// let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
// menu.slice(0,2)


// // Q7. slice()
// // Create a new array that contains only weekend days.
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let weekend=["sunday"];

// =============================================================================

// let arr1=[10,2,5,20,30]
// let sort_var = arr1.sort((a,b)=> a-b)

// let arr2=['a','b','c','d']
// console.log(arr1)
// console.log(arr2)

//for Each Loop
//For Each --> Array ni derek value mate loop chalse.
// let i=[10,25,45,68]
// i.forEach(val => {
//     let new_val = val +10;
//     console.log(new_val)
// });

// .map() Method:
// map tyare j use karvu ke jare ek new array create karvo chhe
// first map create a black array -- only for understanding
// let data = [10, 20, 50, 40, 15];
// // same like a for each loop but map return a new array
// let temp_data = data.map( val => {
//     if(val > 20){
//     return val;
//     }
// });


// ======================================Example===========================
// 1. Double daily steps count
// Real life: Fitness app doubling step goal

// const steps = [1000, 2000, 3000];

// function doubleSteps(step) {
//   return step * 2;
// }
// const newSteps = steps.map(doubleSteps);
// console.log(newSteps)

// 2.
// const minutes = [1, 5, 10];

// const seconds = minutes.map(function(min) {
//   return min * 60;
// });
// console.log(seconds)


// 3.
// const prices = [200, 350, 500];

// const finalPrices = prices.map(price => price + 50);
// console.log(finalPrices)

//4.
// const marks = [35, 72, 88, 40];

// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }

// const grades = marks.map(getGrade);
// console.log(grades)

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true -- > add into new array
// if else(false) -- > not add into new array
// let laptops_price = [15000, 20000, 30000, 65000,
// 99000, 45000];

// let expensive_laptops = laptops_price.filter((price) => 
// {
//     if (price > 30000) return true;
// });
// console.log(expensive_laptops);


//je value 30000 thi vadhare chhe te new array ma add thase and bhija value ne array ma add nahi kare
//use case --> data ma thi specific  data new array ma store karvo hoy based on condition 

// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price

let product_type = ["Mobile", "Tablet", "Laptop","Mouse", "Keyborad"];
let filter_product_type = product_type.filter((type) => 
    {
    if (type === "Tablet" || type === "Mobile")
    return true;
});
console.log(filter_product_type)


//reduce
//reduce tyre j use karva ke jare ek single value calculate karvi hoy from array
let total_price=[15.68,45,25,70,90,56]
let final_price = total_price. reduce( (accumulator,val) => {
return accumulator + val;
},
0); 
// intial value of accumulator
// 0+ 10 => 10
// 10 + 10 => 20
// 20 + 10 => 30
// 30 + 10 => 40

//accumulator --> je values function ma retturn thase te accumulator ma store thase --> accumulator name change kari sako chho.
//val --> array ni direct value
//use case --> data ma thi ek single value calculate karvi hoy
//ex.product ma thi total price calculate karvi hoy


// 1.
const prices1 = [200, 800, 1200, 450, 700];

const total1 = prices1
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);

console.log("Q1 Total:", total1);
