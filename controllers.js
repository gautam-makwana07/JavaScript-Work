//control flow statements in JavaScript
// Example of if-else statement
if (12 < 13) {
  console.log(true);
}
if (15 > 13) {
  console.log(true);
}
//condition is false that why if statemet is not executed

if (!12) {
  console.log("Number");
}
//if - else statement
if (12 < 13) {
  console.log(true);
} else {
  console.log(false);
}

if (15 < 13) {
  console.log(true);
}
//condition is false so else block will be executed
else {
  console.log(false);
}

if (!12) {
  console.log("Number");
} else {
  console.log("Not a Number");
}

//if - else if -else statement
/*
if(condition1){
}
else if(condition2){
}
else{
}
*/

// if (loggedin && admin){
//     console.log("Welcome Admin");
// }
// else if(loggedin){
//     console.log("Welcome User");
// }
// else{
//     console.log("Please log in");
// }

//Switch case statement
switch ("myntra") {
  case "Amazon":
    console.log("You selected Amazon");
    break;
  case "Flipkart":
    console.log("You selected Flipkart");
    break;
  case "myntra":
    console.log("welcome to myntra");
    break;
  default:
    console.log("No match found");
    break;
}

// Second Example
switch ("first50") {
  case "first50":
    console.log("You got 50% off");
    break;
  case "Pogo":
    console.log("watching pogo tv");
    break;
  default:
    console.log("No match found");
    break;
}

//Early return pattern
function score(value) {
  if (value > 90) {
    return "Value is greater than 90";
  } else if (value < 80) {
    return "Value is less than 80";
  } else if (value < 70) {
    return "Value is less than 70";
  } else if (value < 60) {
    return "Value is less than 60";
  } else {
    return "Value is less than 60";
  }
}
score(100);
//console.log(score(100));

function score1(value) {
  if (value > 90) return "Value is greater than 90";
  else if (value < 80) return "Value is less than 80";
  else if (value < 70) return "Value is less than 70";
  else if (value < 60) return "Value is less than 60";
  else return "Value is less than 60";
}

function score2(value) {
  if (value > 60) return "Value is greater than 60";
  if (value < 70) return "Value is less than 70";
  if (value < 80) return "Value is less than 80";
  if (value < 90) return "Value is less than 90";
  return "Value is more than 90";
}

function rps(user, computer) {
  if (user === "rock" && computer === "scissors") return "user win!";
  if (user === "scissors" && computer === "paper") return "user win!";
  if (user === "paper" && computer === "rock") return "user win!";
  if (user === "rock" && computer === "paper") return "computer win!";
  if (user === "scissors" && computer === "rock") return "computer win!";
  if (user === "paper" && computer === "scissors") return "computer win!";
  return "it's a tie!";
}

function rps2(user, computer) {
  if (user === "rock" && computer === "scissors") return "user win!";
  if (user === "scissors" && computer === "paper") return "user win!";
  if (user === "paper" && computer === "rock") return "user win!";
  if (user === computer) return "it's a tie!";
  return "computer win!";
}
