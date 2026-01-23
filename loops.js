//Loops
//for loop
//kyathi thi javanu --> kaya sudhi javanu chhe --> kevi rite javanu chhe, for ex. (1 --> 50 --> increment by 1)

// for(let i=1; i< 10; i++){
//     console.log(i);
// }
// for (let i=20; i>=10; i--){
//     console.log(i);
// }

//while loop -- do while loop
//kya thi javanu -->kya rokavanu chhe --> kevi rite javanu chhe.
//while (ex. 1-> hello word --> 5 stop when condition false)
//start
//while(end){
//code
//change
//}

// let j=10;
// while(j<=20){
//     console.log("J :",j);
//     j++;
// }

// let a = 60;
// while(a >= 20){
//     console.log(a);
//     a--;
// }

// let c=30;
// while(c >= 25){
//     console.log(c);
//     c--;
// }

// let d = "hello world";
// while(d <= 20){
//     console.log(d);
//     d++;
// }

// let f=50;
// while(f >= 60){
//     console.log(f);
//     f++;
// }

// let q =50;
// while(q <= 60){
//     console.log(q);
//     q++;
// }

//do while loop
//do{
//code
//change
//}while(end);

// let g = 10;
// do {
//     console.log("do while :",g);
//     g++;
// }
// while(g <= 20);

// let h = 30;
// do {
//     console.log("do while h:",h);
//     h--;
// }
// while(h >= 1);

//break and continue
// for (let k = 1; k <= 201; k++) {
//   console.log(k);
//   if (k == 32) {
//     break;
//   }
// }

// for (let m = 1; m <= 50; m++) {
//     console.log(m);
//     if (m == 25) {
//         break;
//     }
// }

//continue
// for(let a=1; a<=10; a++){
//     if(a === 5){
//         continue;
//     }
//     console.log(a);
// }

//example 1 :
// for(let j=1; j<=10; j++){
//     console.log("example 1 :",j);
// }

//example 2 :
// let g = 10;
// do {
//     console.log("do while :",g);
//     g--;
// }
// while(g >= 1);

//example 3 :
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//example 4 :
// let i = 1;
// while (i <= 20) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
//   i++;
// }

//example 5 :
// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

//example 6 :
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   // let sum =0;
//   sum = sum + i;
//   // console.log(sum);
// }
// console.log(sum);

//example 7 :
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

//example 8 :
// let num = prompt("give a number");
// for(let i=1; i <=num; i++){
//     if(i%2 ===0){
//         console.log(i, " is even");
//     }else{
//         console.log(i, " is odd");
//     }
// }

//example 9 :
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }

//example 10 :
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i % 7 === 0) {
//     break;
//   }
// }

//example 11 :
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }

//example 12 :
count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    count++;
    console.log(i);
  }
  console.log(i);
  if (count === 5) {

    break;
  }
}


