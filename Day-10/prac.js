//7.FindIndex() - this  method returns the index of the 1st element in an array that satisfies the provided testing function.
//if no element satisfies the testing function it returns -1;

// var age = [20,39,25,36,40,22,65];
// const filterFunction = (element) => element >= 45;
// const output = age.findIndex(filterFunction)
// console.log(output)

//findIndex + Splice
// var todos = ["Eat Breakfast","Eat Lunch","Eat Snack","Eat Dinner"];
// function deleteTodo(todos,index){
// //     console.log(index)
// // console.log(todos.splice(index,1))
//     todos.splice(index,1);
//     return todos;
// }
// const output = deleteTodo(todos,1)
// console.log(output)

// var todos = ["Eat Breakfast","Eat Lunch","Eat Snack","Eat Dinner"];
// function updateTodo(todos,index,newTodo){
// //     console.log(index)
// // console.log(todos.splice(index,1))
//     todos.splice(index,1,newTodo);
//     return todos;
// }
// const output2 = updateTodo(todos,0,"Eat Maggie")
// console.log(output2)

// Q Given an array find two numbers whose addition is equal to target
var array = [124,2,332,21,3,4,5,6,7]
var target = 5;


// output:
// 1 4
// 2 3 
var add = [];
function additionOfTwoNumbers(num){
for(var i = 0;i <= array.length - 1;i++)
{
    for(var j = i+1; j <= array.length - 1;j++){
        // console.log(i,j)
        if(array[i]+array[j] == target)
            add.push([array[i],array[j]])
    }
}
return add;
}
const output = additionOfTwoNumbers(array);
console.log(output)
