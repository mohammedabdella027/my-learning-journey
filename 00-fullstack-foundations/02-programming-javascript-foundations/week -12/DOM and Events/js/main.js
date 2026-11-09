//  your solutions start here
//  make sure to connect your main.js file with your html 
// happy coding 🧑‍💻

// Question 1: The following three questions are based on the two paragraphs under the section which says "For Question 1" in the index.html file.

// 1.1 Select the element with an id of "sample1".
let selectingParaElem = document.getElementById("sample1");

// 1.2 Print the element itself on the console upon page refresh.
console.log(selectingParaElem);

// 1.3 Print the content of the element on the console upon page refresh.
console.log(selectingParaElem.textContent);

// Question 2: The following questions are based on the HTML code found under the section labeled "For question 2".

// 2.1 Select the element with an ID of "techCompanies" and display it on your console. (Do not use "querySelector" for this question)
let seleEle = document.getElementById("techCompanies");
console.log(seleEle);

// 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and display it on your console.
let seleByQuery = document.querySelector("#techCompanies");
console.log(seleByQuery);

// 2.3 How many tech companies are listed under the ul element with an id of "techCompanies"? Use "querySelectorAll" to count the total.
let seleByQuery2 = document.querySelectorAll("li");
console.log(seleByQuery2);

// 2.4 Select all elements with a class name of "red" and display them on the console. Use both "querySelectorAll" and "getElementByClass"
let allRed = document.getElementsByClassName("red");
console.log(allRed);

let allRed2 = document.querySelectorAll(".red");
console.log(allRed2);

// 2.5 Create a new li HTML element with a content of "Facebook" and display it on console
let createNew = document.createElement("li");
createNew.textContent = "Facebook";
console.log(createNew);

// 2.6 Give the newly created element a class of "blue" using JavaScript
createNew.className = "blue";

// 2.7 Append the newly created element next to the the "Sony" li element
addElement = seleEle.appendChild(createNew);

// 2.8 How many of the tech companies are labeled blue? Find the result using JavaScript and display the result inside the "blueCompanies" div.

let blueLabels = document.getElementsByClassName("blue")

function labeledBlue () {
    let sumOfLabled = 0;
    for (let i = 0; i < blueLabels.length; i++) {
            sumOfLabled += 1;
    }
    return sumOfLabled;
}

let createNew2 = document.createElement("p");
createNew2.textContent = labeledBlue();

let blueCompanies = document.getElementById("blueCompanies");

blueCompanies.appendChild(createNew2)

// Question 3:

// Change the background color of the page to light-blue (#99ecff) when clicked on the text that says "Yes". If there is a background color set already, change it to none when clicked on "No"

// Hint: First, write two functions to alter the backgroundColor of the page. One to add a background color, another to remove. Then, select the "yesBackground" or "noBackground" element and bind the selected element with the click event. Finally, attach the function you wrote to alter the background color when the respective element is clicked on.

// setting bg color 
let bgcolor = document.body;

// clicking "YES" to display bgcolor 
function clicked () {
    bgcolor.style.setProperty("background-color","#99ecff");
};

// setting Event for YES
var yesBtn = document.getElementById("yes");
yesBtn.onclick = clicked;

// clicking "YES" to not display bgcolor 
function unclicked () {
    bgcolor.style.removeProperty("background-color","#99ecff");
}

// setting Event for NO
var noBtn = document.getElementById("No");
noBtn.onclick = unclicked

// Question 4:

// A form with two text fields is provided under the section which says "For question 4". Write a JavaScript code which takes the values of the two fields, checks if they are number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says "Please enter numerical values only" underneath the form

let sumBtn = document.getElementById("submitButton");


// checkAndSum();

sumBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let values = document.querySelectorAll("input");
    console.log(values);

    let result = document.getElementById("sum");
    console.log(result);

    let firstValue = Number(values[0].value);
    let secondValue = Number(values[1].value);

    if (!isNaN(firstValue) && !isNaN(secondValue)){
        result.textContent = (firstValue + secondValue);
    } else result.textContent = ("Please enter numerical values only")
})