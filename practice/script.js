// function sum(a,b) {
//     return a+b;
// }
// console.log(sum.toString());
// console.log(Math.abs.toString());
// let myVariable=3;

// console.log(myVariable===4);

// let marks =90;

// if (marks===90) {
//     alert("wow, Excellent Work bachha");
// }
// else{
//     alert("You should work hard");

// let str = "     faizan";

// console.log(str.slice(1,4));


//Conditional opertaor in fuction
// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//     if(btn.textContent === "start machine"){
//         btn.textContent = "stop machine";
//         txt.textContent = "this machine has started";
//     }
//     else{
//         btn.textContent = "start machine";
//         txt.textContent = "The machine is Stopped";
//     }
// }

// let name = "faizan";
// let greating = `hello,${name}`;
// console.log(greating);

let button = document.querySelector("button");
function greet (){
    let name = prompt("what is your name");
    let greeting = document.querySelector("#greeting");
    greeting.textContent = `hello ${name}, nice to see you`;
}
button.addEventListener("click",greet);