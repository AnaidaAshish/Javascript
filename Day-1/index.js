var myage = 30;
var myname = "Dwight";
var email = "dwightschrute@gmail.com"

console.log(myage);
console.log(myname);
console.log(typeof(email));

var bool = true;    //boolean
console.log(typeof(bool));

let alpha = " ";
let num = 1001;
console.log(alpha);
console.log(typeof(num));

const char = `Hello World`;
console.log(typeof(char));

bool = 20; //reassign
var bool = "xyz";//redeclare

// alpha = 30; cannot reassign let variable
// let alpha = "wow";cannot redeclare let variable

// const char = 50; cannot reassign and redeclare variable

{
    var n1 = 1;
    var n2 = 100;
    const num1 = 290;
    const num2 = 230;
    let word1 = "Hello";
    let word2 = 'World'
    console.log(num1 - num2);
    console.log(word1 + word2);
}
    console.log(n1 * n2); //var is a global scope
    // console.log(num1+num2); throws an error bcz const and let are block scopes
    // console.log(word1+word2);