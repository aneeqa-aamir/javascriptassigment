      // | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

 function power() {
 var input = document.getElementById("pow");
 var value = input.value;
 var result = Math.pow(value, 2); // Change the exponent as needed

 // Display the result
 var output = document.getElementById("result");
 output.innerHTML = ` RESULT OF POWER:${value} is ${result}` 
input.value=" "
 }

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

function isLeapYear(){
    let year = parseInt(prompt("Enter year"));
   if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is not a leap year`);
}
}
isLeapYear();

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) 

function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }

  var sideA = 5;
var sideB = 6;
var sideC = 7;

var area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

let subject1Marks = 80;
let subject2Marks = 75;
let subject3Marks = 90;

function calculateAverage(){
    var sum = subject1Marks + subject2Marks + subject3Marks;
    var average = sum / 3;
    return average;
}

function calculatePercentage(){
    var totalMarks = 300;
    var obtainedMarks = subject1Marks + subject2Marks+ subject3Marks;
    var percentage = obtainedMarks / totalMarks * 100;
    return percentage.toFixed(2);
}

function mainFunction(){
    var average = calculateAverage();
    var percentage = calculatePercentage();

console.log(`Average: ${average}`);
console.log(`Percentage: ${percentage}`);
}

mainFunction();

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function indexOf(str,char){
    return str.indexOf(char);
}

let sentence = "hello world";
let position = indexOf(sentence,"o");

console.log(position)

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowels(str){
    return str.replace(/['aeiou']/gi,"");

} 
 var sentence = 'my name is aneeqa';
 const result = deleteVowels(sentence);
 console.log(result);

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.



// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters..

function covertToMeters(kilometers){
    return kilometers*1000;
}

function convertToFeet(kilometers){
    return kilometers*3280.84;
}

function covertToInches(kilometers){
    return kilometers*39370.1;
}

function covertToCentimeters(kilometers) {
    return kilometers * 100000;
}

function printDistanceConversions(kilometers){
    const meters = covertToMeters(kilometers);
    const feet = convertToFeet(kilometers);
    const inches = covertToInches(kilometers);
    const centimeters = covertToCentimeters(kilometers);

console.log('Distance Conversion');
console.log( 'Kilometers:',kilometers);
console.log('Meter:',meters);
console.log('Feet:',feet);
console.log('Inches:',inches);
console.log('Centimeters:',centimeters)
}

const distance =parseInt(prompt("Enter distance"));

printDistanceConversions(distance);

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

var hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
var overtimePay = calculateOvertimePay(hoursWorked);
document.write("Overtime Pay: Rs. " + overtimePay.toFixed(2));

function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;
    var overtimePay = 0.0;

    if (hoursWorked > regularHours) {
        var overtimeHours = hoursWorked - regularHours;
        overtimePay = overtimeHours * overtimeRate;
    }
  
    return overtimePay;
  }

//   10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

let amount = parseFloat(prompt('Enter the amount (in hundred)'));
let denominations = [100,50,10];
let notesCount = [];

for(var i= 0; i < denominations.length; i++){
  var count = Math.floor(amount/denominations[i]);
  amount %= denominations[i];
  notesCount.push(count);
}

console.log("Number of 100s:", notesCount[0]);
console.log("Number of 50s:", notesCount[1]);
console.log("Number of 10s:", notesCount[2]);

// 1. Show an alert box on click on a link.

function showAlert() {
  alert("You clicked the link!");
}

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function showMessage() {
  var imageName = this.alt;
  alert("You clicked on " + imageName);
}

 // 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

 function deleteRow(button) {
 var row = button.parentNode.parentNode;
 row.parentNode.removeChild(row);
 }
    
// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function changeImage(image) {
  image.src = "images/download(1).jpeg";
}

function restoreImage(image) {
  image.src = "images/download.jpeg";
}

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

var counter = 0;

        function increaseCounter() {
            counter++;
            updateCounter();
        }

        function decreaseCounter() {
            if (counter > 0) {
                counter--;
                updateCounter();
            }
        }

        function updateCounter() {
          var counterElement = document.getElementById("counterValue");
            counterElement.textContent = counter;
        }