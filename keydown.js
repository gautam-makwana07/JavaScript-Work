let h1 = document.querySelector("h1");

window.addEventListener("Keydown", (dets) =>{
    if(dets.key === " "){
        h1.textContent = "spece Bar";
    }
    else{
     h1.textContent = dets.key;
    }
    console.log(dets);
});