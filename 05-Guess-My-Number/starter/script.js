"use strict";

let secretnumber = Math.trunc(Math.random()*20) +1;
let highscore = 0;
let score = 20;

console.log(secretnumber);

document.querySelector(".message").textContent;
document.querySelector(".score").textContent;


if(score === 20){
// When player wins
document.querySelector(".number").textContent = secretnumber;
document.querySelector(".number").style.backgroundColor = '#222';
document.querySelector(".number").style.border = '5px solid #60b347';
document.querySelector(".number").style.width = "60rem";
}

console.log(document.querySelector(".number").textContent);
console.log(document.querySelector(".guess").value);
