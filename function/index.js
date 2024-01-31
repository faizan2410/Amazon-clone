// function sayHello() {
//     return "Hello, ";
//   }
//   function greeting(helloMessage, name) {
//     console.log(helloMessage() + name);
//   }
//   // Pass `sayHello` as an argument to `greeting` function
//   greeting(sayHello, "JavaScript!");
//   // Hello, JavaScript

var a = 10;

function test1(){
    var x=1;
    console.log('hvsv');
}
var b = 10;

function test2(){
     var x = 1;
     console.log('hvsv');
}
var c = 30; 
test2()
test1()

/*
*1.create GEC and push it in call stack
*2. memory creation for GEC
*3. code execution GEC
*4. creation of EC for test2 and pushed in call stack
*5. memory creation for EC for test2
*6. code execution for test2
*7. test2 remove from the stack
*8. creation of EC for test1 and pushed in call stack
*9. memory creation for EC for test1
*10.  code execution for test1
*11. remove test1 from the stack
*12. remove GEC from stack
* stack empty
*/