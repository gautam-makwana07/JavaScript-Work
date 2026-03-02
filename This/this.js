// golbal context 
console.log(this);

// function es5 context
function abc() {
    console.log(this);
}
abc(); // window

// function es6 context
let bcd = () => {
    console.log(this);

};
bcd();

// method context
// metod --> function in obj
// 1. method --> fnc in obj

let a = {
    name: "test",
    age: 25,
    write: function () {
        // method -- > ek function je koi object ni under
        // hoy tene method kevaay. // this -> give obeject
        // if you use arrow function then this key give
        //you windows object because arrow function does
        //not have its own this keyword it takes this value
        //from its parent scope
    }
}

// 2. method -- > fnc es6
let b = {
    name: "test",
    age: 25,
    write: () => {
        console.log(this);
    },
};

// 3. method -- > fnc es5 == > fnc es5
let c = {
    name: "test",
    age: 25,
    write: function () {
        function abc() {
            console.log(this);
        }
        abc();

    },

};

c.write(); // window

// 4. method -- > tnc esb == > tnc esb (arrow function)
let d = {
    name: "test",
    age: 25,
    write: function () {
        let bcd = () => {
            console.log("Arrow Function ", this);
        };
        bcd();
    },
};

d.write(); // window

// event handler context
document.querySelector("h1"). addEventListener
("click", function () {
console. log(this);
}); // this value = html element

// class context
class Person {
constructor() {
this. username = "test";
this.email = "test@gmail.com";
console. log(this);
}
}
let p1 = new Person();

console.log("class",p1);