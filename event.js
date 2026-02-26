// Event - page par koi pan action karo tene ek eventrise karshe, page par click, hover, typing all are events
// Event Listener - event nu reaction -- give reaction when click, dbclick, hover, typing
// Add Event Listener
// select -- > event -- > function -- > what you change
// element.addEventListener("event_name", function(){})

// Add Event Listener
// select -- > event -- > function -- > what you change
// element.addEventListener("event_name", function() {})

//======================================================
//Commn Event :  Click, input, change, submit, mouseover, keyup
//Click

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.addEventListener("click", function(){
//     document.body.classList.toggle("bg-body");

// });

//change --when you change element state
// let sel = document.querySelector("Select");

// sel.addEventListener("Change", (dets) =>{
//     console.log(dets.target.value);
//     document.body.style.backgroundColor = dets.target.value;
// });

// ===============================
// Theme Toggle (Dark Mode)
// ===============================
// const darkModeBtn = document.querySelector("button"); // first button = Dark Mode
// const body = document.body;

// darkModeBtn.addEventListener("click", () => {
//     body.classList.toggle("dark");

//     if (body.classList.contains("dark")) {
//         darkModeBtn.textContent = "Light Mode";
//     } else {
//         darkModeBtn.textContent = "Dark Mode";
//     }
// });

// ===============================
// Color Selector
// ===============================
// const colorSelect = document.querySelector("select");

// colorSelect.addEventListener("change", (e) => {
//     const selectedColor = e.target.value;
//     document.documentElement.style.setProperty("--theme-color", selectedColor);
// });

// ===============================
// File Upload
// ===============================
// const uploadBtn = document.querySelector(".upload-btn");
// const dropArea = document.querySelector(".drop-area");

// // Create hidden file input
// const fileInput = document.createElement("input");
// fileInput.type = "file";
// fileInput.multiple = true;
// fileInput.style.display = "none";
// document.body.appendChild(fileInput);

// // Click Upload Button
// uploadBtn.addEventListener("click", () => {
//     fileInput.click();
// });

// // Handle File Selection
// fileInput.addEventListener("change", (e) => {
//     handleFiles(e.target.files);
// });

// ===============================
// Drag & Drop
// ===============================
// dropArea.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     dropArea.classList.add("dragging");
// });

// dropArea.addEventListener("dragleave", () => {
//     dropArea.classList.remove("dragging");
// });

// dropArea.addEventListener("drop", (e) => {
//     e.preventDefault();
//     dropArea.classList.remove("dragging");
//     handleFiles(e.dataTransfer.files);
// });

// ===============================
// File Handler Function
// ===============================
// function handleFiles(files) {
//     dropArea.innerHTML = "";

//     Array.from(files).forEach(file => {
//         const fileItem = document.createElement("p");
//         fileItem.textContent = `📁 ${file.name}`;
//         dropArea.appendChild(fileItem);
//     });
// }

// function changeColor() {
//     const box = document.querySelector(".box");

//     // Random Color Generate
//     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//     box.style.backgroundColor = randomColor;
// }

// const colorPicker = document.getElementById("colorPicker");
// const box = document.querySelector(".box");

// colorPicker.addEventListener("input", function() {
//     box.style.backgroundColor = this.value;
// });

// ===============================================================
// change - when you chagne elements state
// let sel = document.querySelector(".select");
// let mobile = document.querySelector("i");

// sel.addEventListener("change", (dets) => {
//   console.log(dets);
//   console.log(dets.target.value);
//   mobile.textContent = dets.target.value;
// });


// ===============================================================
// let form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
// document.body.style.backgroundColor = "black";
// });

// let card = document.createElement(".card");

// card.addEventListener("mouseover", () => {
//   card.classList.add("hovered");
// });



// ================================================================
// Event Object:
// sel.addEventListener("change", (dets) => { console. log(dets) ; == > dets -- that called event object
// });

// target, type, preventDefault
// target -- > that show element
// type -- >show Event Type
// preventDefault -- > use for html-form -- > prevent form to refresh and clean details


//==================================================================
// event delegation == > darek child par event listener na lagavata only parent par event listner lagavvu
// Event Bubbling and Capturing
// Event Bubbling -- > jena par event aave tena par listener na hoy to aapdu event tena parent par listener gotase ane aavu karta karta upar traf move karshe
let inner_box = document.querySelector(".inner_box");
let outer_box = document.querySelector(".outer_box");
let btn2 = document.querySelector(".btn2")

btn2.addEventListener("click", ()=>{
console. log("Button Clicked");
})

inner_box.addEventListener("click", ()=>{
    console.log("Inner Box Clicked");
    outer_box.style.backgroundColor = "lightblue";
})

outer_box.addEventListener("click", ()=>{
console. log("Outer Div Clicked")
})



// =================================================================
//use case: make it to do list thing
// when you click on text that show strike using bubbuling
// crete list that show shopping things -- use css (text decoration -> line-through)
// Select all checkboxes inside .list
let checkboxes = document.querySelectorAll(".list input[type='checkbox']");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    // Parent <li> select karo
    let listItem = this.parentElement;

    if (this.checked) {
      listItem.style.textDecoration = "line-through";
    } else {
      listItem.style.textDecoration = "none";
    }
  });
});




// =================================================================
btn2.addEventListener("click", () => {
console. log("Button Clicked");
});

inner_box.addEventListener("click", () => {
console. log("inner Div Clicked");
outer_box. style. backgroundColor = "red";
}, true);

outer_box.addEventListener("click", () => {
console. log("Outer Div Clicked");
}, true); // true -- event capturing -- > parent par event listener gotase ane niche taraf move karshe

//use case :
//1. Security layer
//2. chack when event bubbling is failed


///event and event lister and liistener and event delegation and event bubbling and capturing -- > 
// all are important topic for interview and also for real life project`
//Capture vs bubbling

//live character counter
let counter = documenn.querySelector(".counter");
let count =  document.querySelector(".count");

counter.addEventListener("input", () => {
    console.log(counter.value.length);
    count.textContent = counter.value.length;
}); 