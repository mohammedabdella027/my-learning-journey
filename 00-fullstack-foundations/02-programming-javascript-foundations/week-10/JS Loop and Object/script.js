// ---------------------------------------------------
// ---------- Questions on decision loops --------- //
// ---------------------------------------------------

// // Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop.

// --- Using For loop

// function firstInt () {
//     for (let i = 1; i <= 10; i++){
//         console.log("Number " + i)
//     }
// }
// firstInt();

// --- Using While loop

// let firstInt2 = () => {
//     i = 1;
//     while (i <= 10){
//         console.log("number " + i);
//         i++
//     }
// }
// firstInt2();

// -----------------------------------------------

// // Question 2

// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the console.
// Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12

// --- Using For loop

// let sumFive = (x) => {
//     if (typeof x != "number") return console.log("only number");

//     for (let i = 1; i <= 5; i++) {
//         sum = x + i;
//         console.log(sum)
//     };
// }
// sumFive(7);

// --- Using While loop

// function sumFive (y) {
//     if (typeof y != "number") return console.log("only number");

//     i = 1
//     while (i <= 5) {
//         sum = y + i;
//         console.log(sum)
//         i++
//     }
// }
// sumFive(7);

// -----------------------------------------------

// // Question 3

// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+ 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

// --- Using For loop

// let sumFive = (x) => {
//     if (typeof x != "number") return console.log("only number");

//     var result = 0;

//     for (let i = 1; i <= 10; i++) {
//         result += x + i;
//     }
//     console.log(result);
// }
// sumFive(7);

// --- Using For While

// function sumFive (y) {
//     if (typeof y != "number") return console.log("only number");

//     let total = 0;
//     i = 1;
//     while (i <= 10) {
//         total += y + i;
//         i++
//     }
//     console.log(total)
// }
// sumFive(7);

// -----------------------------------------------

// // Question 4

// ● Write a function that takes an array as an argument and prints every element of the array on the console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44

// --- Using For loop

// let listArray = (a) => {
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }
// listArray(a = [1, "Hello", 8, 44]);

// --- Using While loop

// let listArray = (a) => {
//     i = 0;
//     while (i < a.length) {
//         console.log(a[i])
//         i++
//     };
// }
// listArray(a = [1, "Hello", 8, 44]);

// -----------------------------------------------

// // Question 5

// ● Write a function that takes an array as an argument and prints the total number of elements found in the array.

// Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2

// --- Solution

// let listArray = (a) => {
//     console.log(a.length)
// }
// listArray(a = [1, "Hello", 8, 44, "bye"]);

// -----------------------------------------------

// // Question 6

// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because 3 + 0

// --- Using For loop

// let addArray = (arr) => {
//     result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     console.log(result);
// }
// addArray(arr = [5, 6, 99, 8, 76, 4, 68, 44]);

// --- Using While loop

// function addArray (arr) {
//     result = 0;
//     i = 0;
//     while (i < arr.length) {
//         result += arr[i];
//         i++;
//     }
//     console.log(result);
// }
// addArray(arr = [5, 6, 99, 8, 76, 4, 68, 44]);

// -----------------------------------------------

// // Question 7

// Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all odd numbers of the array from the total sum of all even numbers and logs the result in the console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

// --- Using For loop

// function subEvenOdd (arr) {
//     addedEven = 0;
//     addedOdd = 0;

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             addedEven += arr[i];
//         } else addedOdd += arr[i];
//     }

//     return addedEven - addedOdd;
// }
// console.log(subEvenOdd(arr=[5, 6, 99, 8, 76, 4, 68, 44]));

// --- Using While loop

// function subEvenOdd (arr) {
//     addedEven = 0;
//     addedOdd = 0;

//     i = 0;
//     while (i < arr.length) {
//         if (arr[i] % 2 === 0) {
//             addedEven += arr[i];
//         } else addedOdd += arr[i];

//         i++
//     }
//     return addedEven - addedOdd;
// }
// console.log(subEvenOdd(arr=[5, 6, 99, 8, 76, 4, 68, 44]));

// -----------------------------------------------

// // Question 8

// Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

// --- Using For loop

// function jumpOne (arr) {
//     for (let i = 0; i < arr.length; i = i + 2){
//         console.log(arr[i]);
//     }
// }
// jumpOne(arr=[11, "Sam", 3, 7, "car"]);

// --- Using While loop

// function jumpOne (arr) {
//     i = 0;
//     while (i < arr.length) {
//         console.log(arr[i]);
//         i += 2;
//     }
// }
// jumpOne(arr=[11, "Sam", 3, 7, "car"]);











// -------------------------------------------------------
// ----- Questions on built in JavaScript methods------- //
// -------------------------------------------------------

// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

// Question 9

// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

//--------

// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

// function removeAndAdd (sampleArray) {
//     sampleArray.pop() && sampleArray.push("32");
//     return sampleArray;
// }
// console.log(removeAndAdd(sampleArray));

// Question 10

// Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

//--------

// function removeAndAdd (sampleArray) {
//     sampleArray.sort();
//     return sampleArray;
// }
// console.log(removeAndAdd(sampleArray));

// -------------------------------------------------------
// ----- Questions on JavaScript objects------- //
// -------------------------------------------------------

// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.

// let evangadiClass = {
//     lengthOfCourse: "1 Month",
//     website: "https://www.evangadi.com/",
//     isChallenging: false,
//     topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
//     students: [
//     {
//         name: "Abebe",
//         age: 34,
//         sex: "M",
//     },
//     {
//         name: "Kebede",
//         age: 44,
//         sex: "M",
//     },
//     {
//         name: "Almaz",
//         age: 27,
//         sex: "F",
//     },
//     {
//         name: "Challa",
//         age: 22,
//         sex: "M",
//     },
//     {
//         name: "Chaltu",
//         age: 19,
//         sex: "F",
//     },
//     ],
// };
// console.log(evangadiClass);

// // Question 11

// Change the lengthOfCourse property of the object to "5 Month" and print the new object on the console
// Use the dot notation "." to call the property you want to change

    //-----

// evangadiClass.lengthOfCourse = "5 Month";
// console.log(evangadiClass.lengthOfCourse);
// console.log(evangadiClass);

// // Question 12

// Add "Bootstrap" at the end of the topicsCovered property and print the new object on the console
// Use an array method

    //-----

// evangadiClass.topicsCovered.push("Bootstrap");
// console.log(evangadiClass.topicsCovered);
// console.log(evangadiClass);

// // Question 13

//  Write a function that takes the "evangadiClass" object as an argument and calculates the average age of the class. Print the result on the console

    //----- Using For loop

// function aveAge () {
//     sumAge = 0;

//     for (let i = 0; i < evangadiClass.students.length; i++){
//         sumAge += evangadiClass.students[i].age;
//     }

//     return ("Average age: " + sumAge / evangadiClass.students.length);
// }
// console.log(aveAge())

    //----- Using While loop

// function aveAge () {
//     sumAge = 0;
//     i = 0;

//     while (i < evangadiClass.students.length){
//         sumAge += evangadiClass.students[i].age;
//         i++;
//     };
//     return sumAge / evangadiClass.students.length;
// }

// console.log(aveAge());

// // Question 14

// Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console

    //-----

// function percentageOfMale () {
//     male = 0;
//     for (let i = 0; i < evangadiClass.students.length; i++) {
//         if (evangadiClass.students[i].sex === "M") {
//             male += 1
//         }
//     }
//     return ("Male percentage: " + (male / evangadiClass.students.length) * 100);
// };
// console.log(percentageOfMale())

//-------------------------------------------------------
// ----------------- Puzzles ----------------- //
//-------------------------------------------------------

// // Question 15: Test the divisors of three

// Write a function that takes 2 parameters: a low and high number. Your goal is to print all numbers (on the console) between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.

    //-----

// function divOfThree (low, high) {
//     for (let i = low; i <= high; i++) {
//         if (i % 3 === 0) {
//             console.log(i + " div3") 
//         }else{console.log(i);}
//     }
// }
// divOfThree(1, 30);

// // Question 16: The famous coding interview question (FizzBuzz)

// Write a function that prints in the console the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for numbers which are multiples of both three and five print "FizzBuzz".

    //----- the logic right, but this implementation is a bit messy and risky.

// function FizzBuzz () {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 !== 0) console.log("Fizz");
//         if (i % 5 === 0 && i % 3 !== 0) console.log("Buzz");
//         if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//         if (i % 3 !== 0 && i % 5 !== 0) console.log(i);
//     }
// }
// FizzBuzz()

    //-----  this is the clean and correct solution ✅

// function FizzBuzz () {
//     for (let i = 1; i <= 100; i++){
//         if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//         else if (i % 3 === 0) console.log("Fizz");
//         else if (i % 5 === 0) console.log("Buzz");
//         else console.log(i);
//     }
// }
// FizzBuzz();

// // Question 19: Evens number

//  An Evens number is an integer whose digits are all even. For example 2426 is an Evens number but 3224 is not. Write a function named isEvens that prints on the console 1 if its integer argument is an Evens number. The function prints 0 otherwise.

    //-----

function isEvens (num) {
    num.string()
    num.split('');

    for (let i = num; i <= num.length; i++){
        if (i % 2 !== 0) return "0"
    };
    return "1"
}
console.log(isEvens(2426));