function sum() {
  console.log(20 + 65);
}

function add(a, b, c, d) {
  console.log(a + b + c + d);
}
sum();
add("Hello ", "World ", "Have a ", "GoodDay!!");

function checkIsUserQualifiedForDrivingLicence(age) {
    if(age > 18 && age <= 60){
        console.log("Congratulations You are Qualified for Driving Licence!!");
    }else if(age <= 17 || age > 60){
        console.log("Sorry you do not qualify for the Driving Licence");
    }else{
        console.log("You are Eligible for Learning Licence");
    }
}
checkIsUserQualifiedForDrivingLicence(17);