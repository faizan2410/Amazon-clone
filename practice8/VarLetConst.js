/*var
var test;
test = 'value';

var test; // in var duplicate variable doesnt throw error

console.log(test);

var test = 'value1';
console.log(test);

test = 'changedName';

console.log(test);

ES 2015 or ES6 let and const released
let
let x = 10;
let x; // cant do duplicate Assignments in let (syntax error)
let z;
console.log(z);
z =20;
console.log(z);
z =50;
console.log(z);
z = 'abhinav';
console.log(z);
z = true;
console.log(z);

const

const a =10;

const b;//declaration of const and assignment of different lines not allowed
b=20; 

a =20; //override of value not possible in const


functional scope or block scope 

var is a functional scope 
let is block scope

function myfunction(){
   var a =10;
   var b =20;
   { 
      var y =20;
      let x = 10;
      const z =30;
      console.log(x);
      console.log(y);
      console.log(z);
   }
   console.log(z);
   console.log(y);
   console.log(x);
}
myfunction();
/*
let a =20, b=30, c=40

console.log(a);
console.log(b);
console.log(c);*/

//Hoisting

//case with var
console.log(a);//undefined 
var a =10;
console.log(a);//10

//case with let
let x ;
console.log(x);
x= 20;
console.log(x);

//temporal dead zone
