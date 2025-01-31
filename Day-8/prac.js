function isPalindrome(string) {
  for (var i = 0; i <= Math.floor((string.length - 1) / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return "String is not Palindrome!!";
    }
  }
  return "String is Palindrome";
}
// console.log(isPalindrome("malayalam"));
const output = isPalindrome("madam");
console.log(output , "output");

var num = [20,40,60,80,100];
function printArray(num){
for(var i = 0; i <= (num.length-1);i++){
console.log(num[i])
}
}
printArray(num)

var oddNum = [1,2,3,4,5,6,7,8,9,10];
function countOdd(array){
    var count = 0;
    for(var i = 0; i <= oddNum.length -1;i ++){
    if(array[i] % 2 == 1){
        count = count + array[i];
    }
}
console.log("Count of Odd numbers is:" ,count)
}
countOdd(oddNum)