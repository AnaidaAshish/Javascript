//if-else
age = 0;
if (age == 0) {
  console.log("You are not born!!");
} else if (age < 18) {
  console.log("You are not eligible for Driving Licence!!");
} else if (age == 18) {
  console.log("You are Eligible for Learning Licence.");
} else {
  console.log("You are Eligible for Driving Licence");
}

//switch
var UserValue = "Wednesday";
switch (UserValue) {
  case "Sunday":
    console.log("User has choosen Sunday!");
    break;
  case "Monday":
    console.log("User has choosen Monday!");
    break;
  case "Tuesday":
    console.log("The User has choosen Tuesday!");
    break;
  case "Wednesday":
    console.log("The User has choosen Wednesday!");
    break;
  case "Thursday":
    console.log("The User has choosen Thursday!");
    break;
  case "Friday":
    console.log("The User has choosen Friday!");
    break;
  case "Saturday":
    console.log("The User has choosen Saturday!");
    break;
}

// Logical Operators

// && -> and  operator
// if all conditions are true then only it'll return true
// if any single condition is false then it'll return false

// || -> or operator
// if any single condition is true then it'll return true
// if all condition are false then only it'll return  false

var num1 = 1000;
var num2 = 290;
var num3 = 549;

console.log(num1 > 500 && num2 == 290 && num3 > 500);
console.log(1000 >= 1000 && 290 == 1000 && 549 <= 1000);
console.log(num1 == 1000 || num2 <= 100 || num3 <= 1000);
