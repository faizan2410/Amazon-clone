//function -> 2 numbers ,sum

// function sum(a,b){
//     s = a+b;
//     console.log("before return");
//     return s;
//     console.log('after return');
// }

// let val = sum(3,4);
// console.log(val);

//sum fuction
// function sum (a, b) {
//     return a+b;
// }

// const arrowSum = (a,b)=> {
//     console.log(a+b);
// }

// //multiplication fuction
// function mul(a,b) {
//     return a*b ;
// }
// const arrowMul = (a,b) => {
//     console.log(a*b);
// }

// function countVowels(str){
//     let count = 0;
//     //"ApnaCollege", count = 5
//     for(const char of str){
//       if(char === "a" || char === "e"|| char === "i" || char === "o"|| char === "u"){
//         count++;
//       }
//     }

//     return count;
// }

// let arr = ["pune", "katihar", "malda", "Kolkata", "Delhi", "Mumbai", "Singapore"];
// arr.forEach((val, idx, arr) => { 
//       console.log(val.toUpperCase(), idx, arr);
// })
// let nums =[76,57,68,67,52];
// let newArr = nums.map((val)=> {
//       return val*2;
// });

// console.log(newArr);
// let nums =[2562672,25253,36336,36363,39090,267272,9089867];
// let newArr = nums.filter((val) => {
//       return val%2!==0;
// });

// console.log(newArr);
// let arr =[1,2,3,4];
// const output = arr.reduce((prew, curr) => {
//        return prew + curr;
// });
// console.log(output);
// let marks = [87,48,90,98,95,88];

// let newMarks = marks.filter((val) =>{
//       return val>=90;
// });

// console.log(newMarks);
let n = prompt("Enter a Number: ");
let arr =[];
for(let i=1;i<=n;i++){
      arr[i-1] = i;
}
console.log(arr);
let sum = arr.reduce((res , curr)=>{
      return res+curr;
});
console.log("sum is =",sum);
let factorail = arr.reduce((res , curr)=>{
      return res*curr;
});
console.log("factorail is =",factorail);