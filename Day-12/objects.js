//Objects - to store multiple data in key:value form
// var myobj = {key : "value",key2 : "value2"}  syntax

var animal = {type:"Dog",
petName: "Simba",
age: 6, //number
breed:"German Shephard",//String
sibling : ["Anaida","Rambo"], //Array
fav :{food : "Chicken",toy:"Tennis Ball"}//object
}

console.log(animal["age"])//to access specific data
console.log(animal.sibling)//to access specific data
console.log(animal.sibling[animal.sibling.length-1])//last element

animal.gender = "Male" //Reassigning value
animal["location"] = "Navi Mumbai"//Reassigning value
console.log(animal)

//another syntax for object
// variableType varName = new Object()
// const items = new Object()
// items.itemName = "Pen";
// items.quantity = 1;
// items['type'] = "Gel"
// // console.log(items)

// console.log(Object.keys(items))//acces key , returns in array-format
// console.log(Object.values(items))//access value , returns in array-format
// for(let keys in items){
//     console.log(keys,items[keys])
// }//to access key and value

// Q given a String find out number of repetition for single letter

// a : 1
// n : 1
// a : 1
// i : 1
// d : 1
// a : 1

var string = "anaida"
function letterCount(string) {
    var output = {};
    console.log(string, "string");
    for (var i = 0; i <= string.length - 1; i++) {
      // console.log(string[i]);
      // console.log(output[string[i]]);
      if (output[string[i]] == undefined) {
        output[string[i]] = 1;
      } else {
        output[string[i]]++;
      }
    }
    console.log(output);
  }
  
  letterCount(string);

  // Q Given an string find out numbers of repetation for single letter and return a letter which having most of reperation .

  var string = "anaida"
function letterCount(string) {
    var output = {};
    console.log(string, "string");
    for (var i = 0; i <= string.length - 1; i++) {
      // console.log(string[i]);
      // console.log(output[string[i]]);
      if (output[string[i]] == undefined) {
        output[string[i]] = 1;
      } else {
        output[string[i]]++;
      }
    }
    // console.log(output);
    var highestRepetition = '';
    var count = 0;
    for(var string in output){
      if(output[string] > count){
        highestRepetition = string;
        count = output[string]
      }
    }
    console.log(`most repeated letter is ${highestRepetition} and it repeats ${count} times`)
  }
  letterCount(string);
