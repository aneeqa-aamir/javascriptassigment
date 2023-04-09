      //USER INPUT & CONDITIONAL STATEMENT

//Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”
var city = prompt("Please enter a city name:");
if (city === "karachi") {
  document.write("Welcome to the city of lights" + "<br>");
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// var gender = prompt("Please enter your gender (male or female):");
var  gender =prompt("Enter your gender"); 
if (gender === "male") {
  document.write("Good Morning Sir."+ "<br>");
} else if (gender === "female") {
  document.write("Good Morning Ma'am."+ "<br>");
} else {
  document.write("Invalid gender input."+ "<br>");
}

// //3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// //Prompt the user for input
var color = prompt("Enter the color of the road traffic signal (red, yellow, or green):");

if (color === "red") {
  document.write("STOP! The light is red."+ "<br>");
}
 else if (color === "yellow") {
  document.write("CAUTION! The light is yellow."+ "<br>");
}
 else if (color === "green") {
  document.write("GO! The light is green."+ "<br>");
}
 else {
  document.write("Invalid color. Please enter red, yellow, or green."+ "<br>");
}

 // 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,show the message
 //  “Please refill the fuel in your car”
var remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car");
}

 //5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the result in percentage on your page.
//Take percentage & compute grade as per following table:
var marksObtained1 =+prompt("Enter your first subject Marks");
var marksObtained2 =+prompt("Enter your second subject Marks");
var marksObtained3 =+prompt("Enter your third subject Marks");
var totalMarks =300;
var totalObtainedMarks =marksObtained1 + marksObtained2 + marksObtained3;
var percentage = (totalObtainedMarks / totalMarks) * 100;
var per;
if(per < 100 && per >=80){
    document.write("A")
}
else if(per < 80 && per >=70){
    document.write("A")
}
else if(per < 70 && per >=60){
    document.write("B")
}
else if(per < 60 && per >=50){
    document.write("C")
}
else if(per < 50 && per >=33){
    document.write("D")
}
else if(per < 2 && per >=0){
    document.write("You Are Fail")
}
else{
    document.write("You Are assign wrong percentage")
}
var grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}
let remarks;
if (percentage >= 90) {
  remarks = "Excellent";
} else if (percentage >= 80) {
  remarks = "V.Good";
} else if (percentage >= 70) {
  remarks = "Good";
} else if (percentage >= 60) {
  remarks = "keep it up";
} else if (percentage >= 50) {
  remarks = "Need more focus";
} else {
  remarks = "ups!Try again";
}
document.write("Total Marks"+totalMarks+"<br>");
document.write("Total Marks Obtain"+totalObtainedMarks+"<br>");
document.write("Percentage:"+ per+"<br>");
document.write("Grade;"+grade +"<br>");
document.write("Remarks"+remarks+"<br>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
var secret =+prompt("enter a number");
if (secret == 6){
    alert("Bingo! Correct answer");
}
else{
    alert("Close enough to the correct answer")
}

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var number = prompt("Enter a number:");
if (number % 3 === 0) {
  document.write(number + " is divisible by 3."+ "<br>");
} else {
  document.write(number + " is not divisible by 3."+ "<br>");
}

//9.Write a program that checks whether the given input is an even number or an odd number.
var number = prompt("Enter a number:");
if(number % 2 == 0) {
  document.write(number + " is even.");
} 
else {
  document.write(number + " is odd.");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = prompt("Enter the temperature in Celsius:");

if (temperature > 40) {
  console.log("It is too hot outside.");
}
else if (temperature > 30) {
  console.log("The Weather today is Normal.");
}
 else if (temperature > 20) {
  console.log("Today’s Weather is cool.");
}
 else if (temperature > 10) {
  console.log("OMG! Today’s weather is so Cool.");
}
 else {
  console.log("It's freezing outside!");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let a = prompt("Enter the first number:");
let b =prompt("Enter the second number:");
let operator = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operator === "+") {
  result = a + b;
} else if (operator === "-") {
  result = a - b;
} else if (operator === "*") {
  result = a * b;
} else if (operator === "/") {
  result = a / b;
} else if (operator === "%") {
  result = a % b;
} else {
  console.log("Invalid operator entered");
}
document.write("Result: " + result);

              //IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

//1. Write a program that takes a character (number or string)in a variable & checks whether the given input is a number, 
//uppercase letter or lower case letter. 

let input = prompt("Enter a character:");
let charCode = input.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
  console.log(input + " is a number.");
} 
else if (charCode >= 65 && charCode <= 90) {
  console.log(input + " is an uppercase letter.");
}
 else if (charCode >= 97 && charCode <= 122) {
  console.log(input + " is a lowercase letter.");
}
 else {
  console.log(input + " is not a valid character.");
}

//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

let num1 = parseInt(prompt("Enter the first integer: "));
let num2 = parseInt(prompt("Enter the second integer: "));
if (num1 === num2) {
  console.log(`The two integers are equal: ${num1} = ${num2}`);
}
 else if (num1 > num2) {
  console.log(`The larger integer is: ${num1}`);
}
 else {
  console.log(`The larger integer is: ${num2}`);
}

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var number = prompt("Enter a number: ");

if (number > 0) {
  console.log("The number is positive.");
}
 else if (number < 0) {
  console.log("The number is negative.");
}
 else {
  console.log("The number is zero.");
}

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var char =prompt("enter a Character");
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log('is Vowel true');
      }
else {
      console.log('is Vowel false');
      }
 
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. 
// Show “Incorrect password” otherwise.
const correctPassword = "myPassword123";
const userPassword = prompt("Please enter your password:");
if (userPassword === "") {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password");
}
 else {
  alert("Incorrect password");
}

// 6. This if/else statement does not work. Try to fix it:var greeting;
var hour = 13;
var greeting;
var hour = parseInt(prompt("enter hour"));

if (hour <= 18) {
  greeting = "Good day";
  document.write(greeting);
}
 else {
  document.write("Good evening");
}

//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the
//following case using if, else & else if statements
var time = prompt("Enter time");
if (time >= 0000 && time > 1200){
      alert("Good Morning")
}
else if (time >=1200 && time < 1700){
      alert("Good Afternoon")
}
else if (time >= 1700 && time < 2100){
      alert("Good Evening")
}
else if (time >= 2100 && time < 2359){
      alert("Good night")
}
else{
      alert("No time")
}

              //ARRAYS

//1. Declare an empty array using JS literal notation to store student names in future.
let studentNames = []; 

//2. Declare an empty array using JS object notation to store student names in future.
let studentNames = [];

//3. Declare and initialize a strings array.
let stringArray = ["apple", "banana", "cherry", "date"];

//4. Declare and initialize a numbers array.
let numbersArray = [10, 20, 30, 40, 50];

//5. Declare and initialize a boolean array
let booleanArray = [true, false, false, true];

//6. Declare and initialize a mixed array
let mixedArray = [10, "apple", true, "banana", 5.5, false];

//7. Declare and initialize an array of education qualifications in Pakistan
let qualifications = ["<h3>" , "1SSC","HSC", "BCS","BS","B.COM", "MS","M. Phil.","PhD","</h3>"];
document.write(qualifications);

//8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
//Assume that total marks are 500 for each student, display the scores & percentages of students
let studentNames = ["Alice", "Bob", "Charlie"];
let Scores = [420, 350, 470];
let totalMarks =500;
let percentage1 = (Scores[0] / totalMarks) * 100;
let percentage2 = (Scores[1] / totalMarks) * 100;
let percentage3 = (Scores[2] / totalMarks) * 100;
 document.write(
      `${studentNames[0]} has scored ${Scores[0]} scores and got a percentage of ${percentage1} <br>`
      );
document.write(
      `${studentNames[1]} has scored ${Scores[1]} scores and got a percentage of ${percentage1} <br>`
      );
document.write(
      `${studentNames[2]} has scored ${Scores[2]} scores and got a percentage of ${percentage2} <br>`
      );

// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array.Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your browser.
 // Declare and initialize an array of color names
let colors = ["Red", "Green", "Blue"];

// Display the array elements in the browser
document.write("<b>Initial array:</b> " + colors.join(", ") + "<br><br>");

// Ask the user for a color to add to the beginning of the array
let colorToAddToBeginning = prompt("Enter a color to add to the beginning of the array:");

// Add the color to the beginning of the array
colors.unshift(colorToAddToBeginning);

// Display the updated array in the browser
document.write("<b>Array after adding color to the beginning:</b> " + colors.join(", ") + "<br><br>");

// Ask the user for a color to add to the end of the array
let colorToAddToEnd = prompt("Enter a color to add to the end of the array:");

// Add the color to the end of the array
colors.push(colorToAddToEnd);

// Display the updated array in the browser
document.write("<b>Array after adding color to the end:</b> " + colors.join(", ") + "<br><br>");

// Add two more colors to the beginning of the array
colors.unshift("Yellow", "Orange");

// Display the updated array in the browser
document.write("<b>Array after adding two more colors to the beginning:</b> " + colors.join(", ") + "<br><br>");

// Delete the first color in the array
colors.shift();

// Display the updated array in the browser
document.write("<b>Array after deleting the first color:</b> " + colors.join(", ") + "<br><br>");

// Delete the last color in the array
colors.pop();

// Display the updated array in the browser
document.write("<b>Array after deleting the last color:</b> " + colors.join(", ") + "<br><br>");

// Ask the user for an index and a color to add to that index
let indexToAddColor = prompt("Enter an index to add the color:");
let colorToAddAtIndex = prompt("Enter a color to add at the index:");

// Add the color to the desired index
colors.splice(indexToAddColor, 0, colorToAddAtIndex);

// Display the updated array in the browser
document.write("<b>Array after adding color at user-defined position:</b> " + colors.join(", ") + "<br><br>");

// Ask the user for an index and number of colors to delete
let indexToDeleteFrom = prompt("Enter an index to start deleting colors from:");
let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");

// Remove the specified number of colors from the specified index
colors.splice(startIndex, deleteCount);

// Display the updated array in the browser
document.write("<b>Array after deleting colors at specified index:</b> " + colors + "<br><br>");

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
//Store student scores in an array
let scores = [67, 89, 78, 92, 84];

// Display the sorted array in the console
document.write(`${scores.sort()} <br>`);

//11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.
// Initialize the array with city names
let cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad'];

 document.write(`${cities.slice(0,2)}`);

//12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)
var arr = ["This", "is", "my", "cat"];
document.write(arr.join(" "));

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they
//were stored. (FIFO-First In First Out)
// create an empty array
let queue = [];

// add elements to the end of the array using the push() method
queue.push("keyboard");
queue.push("mouse");
queue.push("printer");
queue.push("monitor");

document.write(queue + "<br>"); 
document.write(queue.shift() + "<br>");
document.write(queue + "<br>")

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

// create an empty stack
const stack = [];

// add values to the stack
stack.push("keyboard");
stack.push("mouse");
stack.push("printer");
stack.push("monitor")

// access the values in reverse order
document.write(stack + "<br>"); 
document.write(stack.pop() + "<br>" );
document.write(stack + "<br>");

//15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your
 //browser using document.write() method:
// Define an array of phone manufacturers
const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Write the dropdown/select menu to the document
document.write(`<select name="phoneManufacturers">`);
for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write(`<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`);
}
document.write(`</select>`);

      



              
                 







