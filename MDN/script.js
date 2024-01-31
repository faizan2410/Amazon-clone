//Get a reference to the button element 
var button = document.getElementById("mybutton");

//add a click event listner to the button
button.addEventListener("click",function(){
    prompt("Enter Your Name?!")
});
myFunction();   

function myFunction(){
    console.log("faizan ");
}


// let num = 42;
// let str = "hello";
// let bool = true;
// let obj = {key: "value"};
// let arr = [1,2,3];
// let func = function(){};
// //using typeof
// console.log(typeof num);//"number"
// console.log(typeof str);//string
// console.log(typeof bool);//boolean
// console.log(typeof obj);//object
// console.log(typeof arr);//object
// console.log(typeof func);//function
// console.log(typeof undefinedVariable);//undefined
// let string = "42";
// let number = 42;
// let boolean = true;
// let nullValue = null;

// console.log(number+boolean); 

// var object = Object.create(null);

// var employee1 = {firstName: "Faizan", lastName: "Reza"};
// var employee2 = {firstName : "Ekram", lastName: "Reza"};

// function invite(greeting1, greeting2){
//     console.log(greeting1+ " "+this.firstName+ " "+this.lastName+","+greeting2);
// }

// invite.call(employee1, "Hello", "How are you?");
// invite.call(employee2, "Hello", "How are you?");
