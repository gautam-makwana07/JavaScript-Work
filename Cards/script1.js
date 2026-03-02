// // 1. select -- > Event -- > Function (Change)
// // 2. Show Form and Close Form
// // 3. form - validation, submit, reset
// // 4. store into localstorage
// // 5. createElement and show data
// // 6. show All data into HTML
// // 7. Create UP and Down Btn

// let formContainer = document.querySelector(".form-container");
// let Add = document.querySelector("#add-note");
// let close = document.querySelector(".closeForm");

// Add.addEventListener("click", () => {
//   formContainer.style.display = "block";
// });

// close.addEventListener("click", () => {
//   formContainer.style.display = "none";
// });

// //Form Validation
// let form = document.querySelector(".form");

// const imageUrlInput = form.querySelector(
//   "input [ placeholder='https://example.com/photo.jpg' ]",
// );

// const fullNameInput = form.querySelector(
//   "input [placeholder='Enter full name' ]",
// );

// const homeTownInput = form.querySelector(
//   "input [placeholder='Enter home town' ]",
// );

// const purposeInput = form.querySelector(
//   "input [placeholder='e.g., Quick appointment note']",
// );

// const categoryRadios = form.querySelectorAll("input[name='category']");

// console.log(
//   imageUrlInput,
//   fullNameInput,
//   homeTownInput,
//   purposeInput,
//   categoryRadios,
// );

// form.addEventListener("submit", (z) => {
//   z.preventDefault();

//   const imageUrl = imageUrlInput.value.trim();
//   const fullName = fullNameInput.value.trim();
//   const homeTown = homeTownInput.value.trim();
//   const purpose = purposeInput.value.trim();

//   let selected = false;
//   categoryRadios.forEach((cat) => {
//     if (cat.checked) {
//       selected = cat.value;
//     }
//   });

//   if (fullName === "") {
//     alert("Please Enter Your Full Name");
//     return;
//   }
//   if (imageUrl === "") {
//     alert("Please Enter Image URL");
//     return;
//   }
//   if (home === "") {
//     alert("Please Enter Your Home Town");
//     return;
//   }
//   if (purpose === "") {
//     alert("Please Enter Your PurposeX");
//     return;
//   }

//   //rest  form
//   form.reset();

//   //save data into localstorage
//   saveData({
//     imageUrl,
//     fullName,
//     homeTown,
//     purpose,
//     category: selected,
//   });
//   //close form
//   formContainer.style.display = "none";

//   RenderUi();
// });

// function saveData(data_obj) {
//   let data = JSON.parse(localStorage.getItem("data_notes")) || [];
//   data.push(data_obj);
//   localStorage.setItem("data_notes", JSON.stringify(data));
// }

// //show data into HTML
// function RenderData() {
//   let stack = document.querySelector(".stack");
//   let allData = JSON.parse(localStorage.getItem("data_notes"));
  
//   allData.forEach((data) => {
//     //div card

//     let card = document.createElement("div");
//     card.classList.add("card");
//     stack.appendChild(card);

//     //img avatar
//     let img = document.createElement("img");
//     img.classList.add("avatar");
//     card.appendChild(img);    
//     img.setAttribute("src", note.imageUrl);

//     //h2
//     let h2 = document.createElement("h2");
//     card.appendChild(h2);
//     h2.textContent = note.fullName;

//     //div (info) ==> span (home,town)
//     let info1 = document.createElement("div");
//     info1.classList.add("info");
//     card.appendChild(info1);

//     let home = document.createElement("span");
//     home.textContent = note.homeTown;
//     let town = document.createElement("span");
//     town.textContent = note.category;
//     info1.appendChild(home);
//     info1.appendChild(town);

//     //div (info) ==> span (purpose,note_msg)
//     let info2 = document.createElement("div");
//     info2.classList.add("info");
//     card.appendChild(info2);

//     let purpose = document.createElement("span");
//     purpose.textContent = note.purpose;
//     let note_msg = document.createElement("span");
//     note_msg.textContent = "message.";
//     info2.appendChild(purpose);
//     info2.appendChild(note_msg);

//     //div (button) ==> button(call,msg)
//     let buttons = document.createElement("div");
//     buttons.classList.add("buttons");
//     card.appendChild(buttons);

//     let call = document.createElement("button");
//     call.innerHTML = `<i class="fa-solid fa-phone"></i> Call`;
//     let msg = document.createElement("button");
//     msg.innerHTML = `<i class="fa-solid fa-envelope"></i> Message`;
//     buttons.appendChild(call);
//     buttons.appendChild(msg);

//     //append all tags
    

//     console.log(stack);
//   })
// }
// RenderUi();



document.addEventListener("DOMContentLoaded", function () {

  const formContainer = document.querySelector(".form-container");
  const openBtn = document.querySelector("#add-note");
  const closeBtn = document.querySelector(".closeForm");
  const form = document.querySelector("form");
  const stack = document.querySelector(".stack");
  const upBtn = document.querySelector("#upBtn");
  const downBtn = document.querySelector("#downBtn");

  let currentIndex = 0;

  openBtn.addEventListener("click", () => {
    formContainer.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    formContainer.style.display = "none";
  });

  function getData() {
    return JSON.parse(localStorage.getItem("data_notes")) || [];
  }

  function saveData(data) {
    localStorage.setItem("data_notes", JSON.stringify(data));
  }

  function showCards() {
    const data = getData();
    stack.innerHTML = "";

    data.slice(currentIndex, currentIndex + 3).forEach((note) => {

      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.className = "avatar";
      img.src = note.imgUrl;

      const name = document.createElement("h2");
      name.textContent = note.username;

      const homeDiv = document.createElement("div");
      homeDiv.className = "info";
      homeDiv.innerHTML = `
        <span>Home town</span>
        <span>${note.home}</span>
      `;

      const purposeDiv = document.createElement("div");
      purposeDiv.className = "info";
      purposeDiv.innerHTML = `
        <span>Purpose</span>
        <span>${note.purpose}</span>
      `;

      const categoryDiv = document.createElement("div");
      categoryDiv.className = "info";
      categoryDiv.innerHTML = `
        <span>Category</span>
        <span>${note.selected}</span>
      `;

      const buttons = document.createElement("div");
      buttons.classList.add("buttons");

      let call = document.createElement("button");
      call.classList.add("call");
      call.innerHTML = '<i class="ri-phone-line"></i> Call';

      let msg = document.createElement("button");
      msg.classList.add("msg");
      msg.innerHTML = '<i class="ri-message-line"></i> Message';

      buttons.appendChild(call);
      buttons.appendChild(msg);

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(homeDiv);
      card.appendChild(purposeDiv);
      card.appendChild(categoryDiv);
      card.appendChild(buttons);

      stack.appendChild(card);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const imgUrl = form.querySelector("input[placeholder='https://example.com/photo.jpg']").value.trim();
    const username = form.querySelector("input[placeholder='Enter full name']").value.trim();
    const home = form.querySelector("input[placeholder='Enter home town']").value.trim();
    const purpose = form.querySelector("input[placeholder='e.g., Quick appointment note']").value.trim();
    const category = form.querySelector("input[name='category']:checked");

    if (!imgUrl || !username || !home || !purpose || !category) {
      alert("Please fill all fields");
      return;
    }

    const newNote = {
      imgUrl,
      username,
      home,
      purpose,
      selected: category.value,
    };

    const data = getData();
    data.unshift(newNote);
    saveData(data);

    form.reset();
    formContainer.style.display = "none";
    currentIndex = 0;
    showCards();
  });

  upBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      showCards();
    }
  });

  downBtn.addEventListener("click", () => {
    const data = getData();
    if (currentIndex < data.length - 1) {
      currentIndex++;
      showCards();
    }
  });

  showCards();

});