// Q Give an aray, do addition of numbers by using while loop .
var array = [2, 4, 5, 6, 7, 8, 3, 2];
function add(array){
var i = 0;
var sum = 0;
while (i <= array.length - 1) {
//   console.log(array[i]);
  sum += i;
  i++;
}console.log("Sum of array is:", sum);
}
add(array)

// Q Give an aray, find only odd numbers by using while loop .
var array2 = [2, 4, 5, 6, 7, 8, 3, 2];

function oddNum(array2){
   
    var i = 0;
    while(i <= array2.length-1){
      
        if(array2[i] % 2 == 1){
            // return array2[i]
            console.log("The Odd Numbers are", array2[i])
           
        }
        i++
    } 
}
// const result = oddNum(array2)
oddNum(array2)
// console.log("The Odd Numbers are", array2[i])

// Q Give an aray, find count of even numbers by using while loop .

var array3 = [2, 4, 5, 6, 7, 8, 3, 2];
function evenCount(array3){
var a = 0;
var evenCount = 0;
    while(a <= array3.length-1){
        if(array3[a] % 2 == 0){
            // console.log(array3[a])
            evenCount = evenCount + array3[a]
            // console.log("Even Count is:",array3[a])
            // evenCount++
        }
        a++
}console.log("Even Count is:",evenCount)
}
evenCount(array3)