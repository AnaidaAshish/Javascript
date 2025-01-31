let allStudents = ["Harry","Jim","Dwight","Michael","Pam"];
let studentName = "Michael";
function students(allStudents,target){
for(let i = 0;i < allStudents.length;i++){
    if(allStudents[i] == target){
     return (i)
    }
}
// console.log(i)
}
console.log(students(allStudents,studentName))