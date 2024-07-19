// Q1.Sum of all numbers from range 10-40
function sum(starting, ending) {
  var count = 0;
  for (var i = starting; i <= ending; i++) count = count + i;
  console.log("count =", count);
}
sum(10, 40);

//Q2.Calculate the factorial of number
function fact(num) {
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  console.log("Factorial of the given no. is: ", factorial);
}
fact(10);

//Q3. Find whether the string is palindrome or not
function pal(value){
for(var i = 0; i <= Math.floor((value.length - 1)/ 2); i++){
    console.log(value[i])
}
}
pal("madam")

var total = 3647.334;
console.log("Math.floor value is:" , Math.floor(total));
console.log("Math.ceil value is:" , Math.ceil(total));

var myName= "Anaida";
console.log("name.length is:" ,myName.length)
console.log("index value is:" ,myName[3])










