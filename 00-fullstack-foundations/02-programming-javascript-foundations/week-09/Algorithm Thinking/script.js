// --------------- DAY 1 ---------------

// ------- QUESTION ONE / 1 -------
// This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:

// function hello() {

// }
// All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.

// ------SOLVING WITH JS

// function hello() {
//     return "hello edabit.com"
// }

// ----------------------------------------------

// ------- QUESTION TWO / 2 -------
// Create a function that takes two numbers as arguments and returns their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10
// Notes
// Don't forget to return the result.

// // ------SOLVING WITH JS
// function sumTwoNum(a, b) {
//     return a + b;
// }
// console.log(sumTwoNum(3, 4));

// -------------------------------------

// --------------- DAY 2 ---------------

// ------- QUESTION FOUR / (Frames Per Second) -------

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000

// Notes
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

// ---------- Pesudo code ------

// # create a function with name frames that takes 2 params which "x" and "y"
// # create if statement which is recieve only number
// # craete variation for y to calcuate y * 60
// # return (x * yValue)

// ---------- Pesudo code to JS------

// let frames = (x, y) => {
//     if (isNaN (x) || isNaN (y)) return "please provide only numbers";

//     // let yValue = y;
//     yValue = y * 60;

//     return (x * yValue + " frame");
// }

// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));

// ------- QUESTION FIVE / (Two Makes Ten) -------

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// Examples
// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true
// Notes
// Don't forget to return the result.

// ---------- Pesudo code ------
// # create a function with makesTen name and two params which are a and b
//     let makesTen = (a, b)
// // # then create if statement to return true if one of the argument is 10
// if (a || b == 10) {
//     return "true"
// }
// // # else if the two arguments addition is equal to 10 again return true
// else if (a + b == 10) {
//     return "true"
// }
// // # if it is not both return false
//     else {
//     return "false"
// }

// ---------- Pesudo code to JS------

// let makesTen = (a, b) => {
//     if (a && b == 10) {
//         return "true"
//     } else if (parseFloat(a) + parseFloat(b) == 10) {
//         return "true"
//     } else {
//     return "false"
//     };
// }
// console.log(makesTen(1, 9));

// ------- QUESTION SIX / (Movie Theatre Admittance) -------

// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.

// Examples
// acceptIntoMovie(14, true) ➞ true

// acceptIntoMovie(14, false) ➞ false

// acceptIntoMovie(16, false) ➞ true
// Notes
// age is a decimal.
// isSupervised is a boolean.

// ---------- Pesudo code ------

// # create a function with acceptIntoMovie name and two params which are age and isSupervised
// let acceptIntoMovie = (age, isSupervised)
// craete if condition if the age and isSupervised are true return true
//     if (age <= 15 && isSupervised) {
//         return "true"
//     };
// otherwise return false
//     else {
//         return "false"
//     };

// ---------- Pesudo code to JS------

// let acceptIntoMovie = (age, isSupervised) => {
//     if (age >= 15 || isSupervised) {
//         return "true"
//     } else if (isNaN (age) || isNaN (isSupervised)) return "please provide only numbers"
//     else {
//         return "false"
//     };
// }
// console.log(acceptIntoMovie(5, true));

// ------- QUESTION SEVEN / (Century Crisis) -------

// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

// Examples
// futurePeople(256, 2) ➞ 976

// futurePeople(3248, 6) ➞ 5408

// futurePeople(5240, 3) ➞ 6320

// Notes
// Humanity's fate lies in your calculation.

// ---------- Pesudo code ------

// # create a function with futurePeople name and two params which are population and n.
// # craete if condition if the population and n are only number.
// # declare variation which is n = n * 360;
// # return the result (population + n)

// ---------- Pesudo code to JS------

// let futurePeople = (population, n) => {
//     if (isNaN (population) || isNaN (n)) return "please provide only numbers";
//     n = n * 360;
//     return (parseFloat (population) + parseFloat (n) + " people");
// }
// console.log(futurePeople(256, 2));

// function futurePeople(population, n) {
//     for (let i = 1; i <= 360; i++) {
//     population = population + n;
// }
// return population;
// }
// console.log(futurePeople(2, 45));

// ------- QUESTION EIGHT / (Find Out the Leap Year) -------

// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

// Write a function that determines if the year is a leap year or not.

// Examples
// leapYear(2020) ➞ true

// leapYear(2021) ➞ false

// leapYear(1968) ➞ true

// Notes
// N/A

// ---------- Pesudo code ------

// # create a function with leapYear name and one params which is year.
// # create if statement to if year divisible by 4 say true 
// # and again if year divisble by 400 say true 
// # otherwise say false 

// ---------- Pesudo code to JS------

// let leapYear = (year) => {
//     if (year % 4 !== 0) return false;
//     if (year % 100 !== 0) return true
//     if (year % 400 === 0) return true;
//     return false;
// }
// console.log(leapYear(2021));

// -------------------------------------

// --------------- DAY 3 ---------------

// ------- QUESTION NINE / (Stack the Boxes) -------

// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...

// Stack the Boxes

// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

// Examples
// stackBoxes(1) ➞ 1

// stackBoxes(2) ➞ 4

// stackBoxes(0) ➞ 0

// Notes
// Step n is a positive integer.

// ---------- Pesudo code ------

// # create a function with stackBoxes name and one params which is n.
// # with in function n ** 2 then return the value

// ---------- Pesudo code to JS------

// let stackBoxes = (n) => {
//     return n ** 2;
// }
// console.log(stackBoxes(4));

// -------------------------------------

// --------------- DAY 4 ---------------

// ------- QUESTION TEN / (Is Sam with Frodo?) -------

// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

// Examples
// middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true

// middleEarth(["Frodo", "Saruman", "Sam"]) ➞ false

// middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) ➞ true

// Notes
// No matter who comes first, the result must be true if Frodo and Sam are side by side.
// There is only one Sam and one Frodo in the array.

// ---------- Pesudo code ------

// # create a function with middleEarth name and one params which is arr.
// # create for loop with i<arr.length condition with in that for loop, if arr [i] equal to "sam" && arr [i+1] equal to "frodo" return true or viseversal say true otherwise without for loop say false.

// ---------- Pesudo code to JS------

// let middleEarth = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "Sam" && arr[i + 1] === "Frodo")return true;
//         if (arr[i] === "Frodo" && arr[i + 1] === "Sam") return true;
//     }
//     return false;
// }
// console.log(middleEarth(arr = ["Frodo", "Saruman", "Sam"]));

// -------------------------------------------------------------------------------EASY----------------------------------------------------------------------------------------------

// ------- QUESTION ELEVEN / (Add up the Numbers from a Single Number) -------

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300
// Notes
// Expect any positive number between 1 and 1000.

// ---------- Pesudo code ------

// # create a function with addUp name and one params which is n.
// # create variable which sum = 0
// # then create for loop with i <= n condition and initialize by 1 and increment by one then with in that loop calculate sum += i
// # return the value sum without the loop

// ---------- Pesudo code to JS------

// let addUp = (n) => {
//     if (n <= 0 || n > 1000) return "please, provide only any positive number between 1 and 1000."
//     let sum;
//     sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(addUp(1000));

// ------- QUESTION TWELLVE / (Recursion to Repeat a String n Number of Times) -------

// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

// String.prototype.repeat() is not allowed

// Examples
// repetition("ab", 3) ➞ "ababab"

// repetition("kiwi", 1) ➞ "kiwi"

// repetition("cherry", 2) ➞ "cherrycherry"
// Notes
// The second parameter of the function is positive integer.

// ---------- Pesudo code ------

// # create a function with repetition name and two params which are txt and n.
// # create if condition that n only recieve positive number
// # create a variable that allTxt = ""
// # then create for loop with 1 initialization, with i <= n, and with one increment
// # with in that loop create allTxt += txt
// # lastly without the for loop return the allTxt

// ---------- Pesudo code to JS------

// let repetition = (txt, n) => {
//     if (n < 0) return "please, provide only positive number"

//     allTxt = "";

//     for (i = 1; i <= n; i++) {
//         allTxt += txt;
//     }
//     return allTxt;
// }
// console.log(repetition("abb", 5))

// -------- OR WITH JS METHOD -------

// function repetition2 (txt, n) {
//     return txt.repeat(n);
// }
// console.log(repetition2("ab",3))

// ------- QUESTION TWELLVE / (Return the Highest and Lowest Numbers) -------

// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

// Examples
// highLow("1 2 3 4 5") ➞ "5 1"

// highLow("1 2 -3 4 5") ➞ "5 -3"

// highLow("1 9 3 4 -5") ➞ "9 -5"

// highLow("13") ➞ "13 13"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.