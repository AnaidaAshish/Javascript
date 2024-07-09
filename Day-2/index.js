//hoisting
a = "Hello";
console.log(typeof(a));
 
var a;

// num =2000; will throw an error bcz let variables cannot hoist
// console.log(num);
// let num;

//  x = 'abc'; will throw an error bcz const variables cannot hoist
//  console.log(x);
//  const x;

//Camparison Operators
// "=" is used to assign a value
// "==" is used to check whether both the data are equal
// "===" checks where both the data are equal and their types are equal as well

console.log(390 == '390');
console.log(390 === '390')
console.log(549 < 1)
console.log(2345 > 20);
console.log(456 >= 456);
console.log(232<= 232)
console.log(345 != 345) //not equal to

//Conditional Statements
//Syntax:
//  if(condition){
//       statements;
//        }else{
//              statements;
//             }

if(273 == '273'){
        console.log("The given condition is TRUE")
        }else{
                 console.log("The given condition is FALSE")
             }

if(345==="345"){
    console.log("The given statement is True");
    }else{
          console.log("The given statement is False")
         }

if(20*2 == 40){
    console.log("The given given statement is true");
}else{
    console.log("The given statement is False")
}

