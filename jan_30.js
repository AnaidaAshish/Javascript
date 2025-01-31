// use while loop to print numbers as 1,2,3,4,5,*,*,*,*,*,*,11,12,13,14,15,*,*,*,* n=19
// let n = 19;
// const printStar = (n) => {
//   let i = 1;
//   let result = "";
//   while (i <= 19) {
//     if (i % 10 >= 6 || i === 10) {
//       result += "*";
//     } else {
//       result += i;
//     }

//     if (i < n) {
//       result += ",";
//     }
//     i++;
//   }
//   return result;
// };

// console.log(printStar(n));

let N = 19;
const print = (n) => {
  let arr = [];

  let i = 1;
  while (i <= n) {
    if (i % 10 >= 6 || i === 10) {
      arr[arr.length] = "*";
    } else {
      arr[arr.length] = i;
    }
    i++;
  }
  return arr;
};
// console.log(prkint(N));

// find pairs whose sum is 100
// let arr = [80, 60, 10, 50, 30, 100, 0, 50];
// let target = 100;

// const findPair = (arr, target) => {
//   let length = 0;
//   let pairs = [];

//   while (arr[length] !== undefined) {
//     length++;
//   }

//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (arr[i] + arr[j] === target) {
//         pairs[pairs.length] = [arr[i], arr[j]];
//       }
//     }
//   }
//   return pairs;
// };

// console.log(findPair(arr, target));

// find next palindrome
// Function to check if a number is a palindrome
// const isPalindrome = (num) => {
//   let original = num;     // Store the original number for comparison
//   let reversed = 0;       // Initialize reversed number as 0

//   while (num > 0) {       // Loop until the number becomes 0
//     let digit = num % 10; // Extract the last digit
//     reversed = reversed * 10 + digit; // Build the reversed number
//     num = (num / 10) | 0; // Remove the last digit (alternative to Math.floor)
//   }

//   return original === reversed; // Check if the original and reversed are equal
// };

// // Function to find the next palindrome
// const nextPalindrome = (num) => {
//   num++; // Start checking from the next number

//   while (!isPalindrome(num)) { // Keep checking until we find a palindrome
//     num++; // Increment the number
//   }

//   return num; // Return the palindrome found
// };

// // Example usage
// console.log(nextPalindrome(123));  // Output: 131
// console.log(nextPalindrome(808));  // Output: 818
// console.log(nextPalindrome(999));  // Output: 1001

const isPalindrome = (num) => {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = (num / 10) | 0;
  }
  return original === reversed;
};

const nextPalimdrome = (num) => {
  num++;

  while (!isPalindrome(num)) {
    num++;
  }

  return num;
};
// console.log(nextPalimdrome(123));

// find missing number
let arr = [1, 2, 3, 5, 6];
const missing = (arr) => {
  let length = 0;
  while (arr[length] !== undefined) {
    length++;
  }

  let n = length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < length; i++) {
    actualSum += arr[i];
  }
  let sum = expectedSum - actualSum;
  return sum;
};
// console.log(missing(arr));

let str = "anaida";
const charCount = (str) => {
  let charTotal = {};
  let i = 0;
  while (str[i] !== undefined) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
    i++;
  }

  return charCount;
};
// console.log(charCount(str));

// third largest element
let a = [20, 12, 1, 31, 41, 11, 44];

const thirdElement = (a) => {
  let first = a[0];
  let second = a[1];
  let third = a[2];

  if (third > first) {
    [third, first] = [first, third];
  }
  if (third > second) {
    [third, second] = [second, third];
  }
  if (second > first) {
    [second, first] = [first, second];
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] > first) {
      third = second;
      second = first;
      first = a[i];
    } else if (a[i] > second) {
      third = second;
      second = a[i];
    } else if (a[i] > third) {
      third = a[i];
    }
  } return third
};
console.log(thirdElement(a));
