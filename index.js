// Problem Solve : 01 Reverse a String
// Write a function that takes a string and returns it reversed.
let string = 'hello';
let result = '';
for (let i = string.length -1; i >= 0; i--) {
  result += string[i];
} 
console.log(result);
// Output: "olleh"

// Problem Solve : 02  Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
let ph ="programming";
let count = 0;
for (let i =0;i < ph.length; i++) {
  let char = ph [i].toLowerCase();
  if ('aeiou'.includes(char)) {

    count++;
  }   
}
console.log(count);
// Output: 3  

// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).
let md = "madam";
let reversed = '';
for (let i = md.length -1; i >= 0; i--) {
  reversed += md[i];
}
if (md === reversed) {
  console.log(true);
} else {
  console.log(false);
} 
// Output: true

// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.
let numbers = [5,1, 9, 3];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);
// Output: 9

// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

let nums = [1, 2, 2, 3, 4, 4, 5]; 
let uniqueNums = [];
for (let i = 0; i < nums.length; i++) {
  if (!uniqueNums.includes(nums[i])) {  
    uniqueNums.push(nums[i]);
  }
}   
console.log(uniqueNums);
// Output: [1, 2, 3, 4, 5]

// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
let arr = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
} 
console.log(sum);
// Output: 10 


// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.
let array = [1, 2, 3, 4, 5, 6];
let evenNumbers = []; 
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    evenNumbers.push(array[i]);
  }
}
console.log(evenNumbers);
// Output: [2, 4, 6]

// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.
let sentence = "hello world";
let words = sentence.split(' ');
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
let resul = words.join(' ');
console.log(resul);
// Output: "Hello World"

// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

let number = 5;
let factorial = 1;  
for (let i = 1; i <= number; i++) {
  factorial *= i;
} 
console.log(factorial);
// Output: 120

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20. 

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("PingPong");
  } else if (i % 3 === 0) {
    console.log("Ping");
  } else if (i % 5 === 0) {
    console.log("Pong");
  } else {
    console.log(i);
  } 
}
// Output:
// 1  
// 2
// Ping
// 4
// Pong
// Ping
// 7
// 8          
// Ping
// Pong
// 11
// Ping 
// 13
// 14
// PingPong
// 16
// 17
// Ping
// 19
// Pong