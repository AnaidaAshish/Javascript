//Here we are making a dynamic function by passing parameters as starting ending.
//normally we pass the value in parameters but here we are writing parameter names,
//passing the values while calling the function

// function num(starting, ending) {
//   for (var i = starting; i <= ending; i++) {
//     console.log(i);
//   }
// }
// num(20, 40);

// function num2(starting, ending, sequence) {
//   for (var i = starting; i <= ending; i += sequence) {
//     console.log(i);
//   }
// }
// num2(1, 100, 2);

// function num3(starting, ending,sequence){
// for (var i = starting; i <= ending; i += sequence)
// {
//     console.log(i)
// }
// }
// num3(50,150,10)
console.log("Reverse Question 1:");
function reverse(starting, ending) {
  for (var i = starting; i >= ending; i--) {
    console.log(i);
  }
}
reverse(10, 1);

console.log("Reverse Question 2: Reverse with sequence of 3");
function reverseSeq(starting, ending, sequence) {
  for (var i = starting; i >= ending; i -= sequence) {
    console.log(i);
  }
}
reverseSeq(40, 20, 3);

console.log("Reverse Question 3: Print Odd nos.");
function reverseOdd(starting, ending) {
  for (var i = starting; i >= ending; i--) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
reverseOdd(40, 0);

console.log("Question 4: Count Odd Even nos. from 1-100");
function countOddEven(starting, ending) {
  countEven = 0;
  countOdd = 0;
  for (var i = starting; i <= ending; i++) {
    if (i % 2 == 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
  console.log(`Number of Evens : ${countEven}`);
  console.log(`Number of Odds : ${countOdd}`);
}
countOddEven(1, 100);
