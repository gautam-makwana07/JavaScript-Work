// function createCard() {

//     // Get input values
//     const image = document.getElementById("image").value.trim();
//     const name = document.getElementById("name").value.trim();
//     const bio = document.getElementById("bio").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();

//     // Image update (only if link is provided)
//     if (image !== "") {
//         document.getElementById("cardImage").src = image;
//     }

//     // Update text fields (only if not empty)
//     if (name !== "") {
//         document.getElementById("cardName").innerText = name;
//     }

//     if (bio !== "") {
//         document.getElementById("cardBio").innerText = bio;
//     }

//     if (email !== "") {
//         document.getElementById("cardEmail").innerText = email;
//     }

//     if (phone !== "") {
//         document.getElementById("cardPhone").innerText = phone;
//     }

//     // Optional: clear inputs after submit
//     document.getElementById("image").value = "";
//     document.getElementById("name").value = "";
//     document.getElementById("bio").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phone").value = "";
// }



// Select form and inputs
let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Page reload rokva mate

  // Create elements
  let card = document.createElement("div");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  let h5 = document.createElement("h4");

  // Add class
  card.classList.add("card");
  img.classList.add("dp-img");

  // Add content
  img.src = inp[0].value || "https://via.placeholder.com/100";
  h2.textContent = inp[1].value;
  h3.textContent = inp[2].value;
  h4.textContent = inp[3].value;
  h5.textContent = inp[4].value;

  // Append elements inside card
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(h4);
  card.appendChild(h5);

  // Add card to body (multiple cards create thase)
  document.body.appendChild(card);

  // Clear form
  form.reset();

  inp.forEach((inp) =>{
    if (inp.value === "submit") {
      inp.value = "";
    }
  });
});
