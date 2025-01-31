// // Q1.Given an array find count of numbers who are even
// // var num = [10, 23, 12, 43, 56, 356, 200, 32, 14, 22243];
// // function countEvenNumbers(n) {
// //   var evenCount = 0;
// //   for (var i = 0; i <= num.length - 1; i++) {
// //     if (n[i] % 2 == 0) {
// //       evenCount++;
// //     }
// //   }
// //   return evenCount;
// // }
// // const output = countEvenNumbers(num);
// // console.log("Count is:", output);

// //Array Methods
// //1.Push - adds new element at the end of the array

// var fruits = ["Apple", "Mango", "Pear"];
// console.log(fruits)

// fruits.push('Orange')
// fruits.push('Kiwi','Guava')
// console.log("Push Output", fruits)

// //2.Pop - removes the last element of aaray
// fruits.pop()
// console.log("Pop Output",fruits)

// //3.Shift - removes the first element of the array
// fruits.shift()
// console.log("Shift Output", fruits)

// //4.Unshift - adds new element at the starting of the array
// fruits.unshift('Berry')
// console.log("Unshift Output",fruits)

// //5.Slice - gives a copy of the og array with start and end of the index value passed.does not include the end.
// var names = ["Dwight","Jim","Michael","Pam","Kelly"]
// console.log(names.slice(1,4))//Kelly was not included
// console.log(names.slice(-2))//Reversed array
// console.log(names.slice(-3,-5))//empty array invalid syntax

// //6.Splice - We can insert or replace an element in the middle of the array.Doesn't return anything updates the OG array
// //0 - insert  1 - replace

// //syntax - .splice(index, 0/1, new element)

// var animals = ["Dog","Cat","Elephant","Cow","Donkey","Camel"]
// animals.splice(3,0,"Wolf")
// animals.splice(2,1,"Tiger")
// console.log(animals)

// // Q Given an Array of names find out index of target
// var students = ["Rahul", "Nehal", "Ali", "Amod", "Adep"];
// var target = "Adep";
// //output = 4
// function targetIndex(students) {
//   // console.log(students)
//   for (var i = 0; i < students.length; i++) {
//     // console.log(i)
//     if (students[i] == target) {
//       // console.log(i)
//       return i;
//     }
//   }return "Not Found!"
// }
// const output = targetIndex(students);
// console.log("The output is:" , output)
const employees = [
  { name: "Alice", age: 25, department: "HR" },
  { name: "Bob", age: 30, department: "Engineering" },
  { name: "Charlie", age: 22, department: "HR" },
  { name: "David", age: 35, department: "Engineering" },
  { name: "Eve", age: 28, department: "Marketing" }
  ];
  function sortByDepartmentAndAge(employees) {
    function compare(a,b){
      if(a.department > b.department){
        return 1
      }else if(a.department < b.department){
        return -1
      }
      else{
        return a.age - b.age
      }
      
    }
    console.log(employees.sort(compare))

  }
  sortByDepartmentAndAge(employees)
  
  // console.log(sortByDepartmentAndAge(employees));
  // Output should be sorted by department and then by age within each department