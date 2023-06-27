           //MATH METHODS
// 1.Write a program that takes a positive integer from user & display the following in your browser.
//  a. number
//  b. round off value of the number
//  c. floor value of the number
//  d. ceil value of the number          

// // Get the input value from the user
// var num = parseInt(prompt("Enter a Positive Integer:"));

// // Calculate and display the rounded off value
// var roundOff = Math.round(num);
// console.log("Round Off Value:", roundOff);

// // Calculate and display the floor value
// var floorVal = Math.floor(num);
// console.log("Floor Value:", floorVal);

// // Calculate and display the ceil value
// var ceilVal = Math.ceil(num);
// console.log("Ceil Value:", ceilVal);

// 2.Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// // Get the input value from the user
// var num = parseFloat(prompt("Enter a Negative Floating-Point Number:"));

// // Calculate and display the rounded off value
// var roundOff = Math.round(num);
// console.log("Round Off Value:", roundOff);

// // Calculate and display the floor value
// var floorVal = Math.floor(num);
// console.log("Floor Value:", floorVal);

// // Calculate and display the ceil value
// var ceilVal = Math.ceil(num);
// console.log("Ceil Value:", ceilVal);

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// // Get the input value from the user
// var num = parseInt(prompt("Enter a Number:"));

// // Calculate and display the absolute value
// var absVal = Math.abs(num);
// console.log("Absolute Value:", absVal);

//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// function rollDice() {
//     var diceValue = Math.floor(Math.random() * 6) + 1;
//     console.log("The value of the dice is: " + diceValue);
//   }
  
//   // Call the rollDice() function to simulate a dice roll
//   rollDice();
  
//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// var coinValue = Math.random();
// if (coinValue < 0.5) {
//   console.log("The coin landed on heads.");
// } else {
//   console.log("The coin landed on tails.");
// }

//6. Write a program that shows a random number between 1 and 100 in your browser.

//console.log("A  random number between 1 and 100 is;", Math.floor(Math.random() * 100) + 1);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// ask user for weight
// let weight = prompt("Please enter your weight:");

// if(weight = 50){
//     document.write("Your weight is " + weight)
// }

// else(weight =50.2 ){
//     document.write("Your weight is " + weight + " kilograms.")
// }

//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret
//number, congratulate the user.

// var input = +prompt("Enter number 1 to 10");
// var secretNum = 6;
//  if(input === secretNum ){
//     console.log("You find secret number")
//  }
//  else{
//     console.log("uppppssss! you did not found")
//  }


             //DATE METHODS

//1. Write a program that displays current date and time in your browser.

// var date = new Date();
// console.log(date);

//2. Write a program that alerts the current month in words. For example December.

// Create an array of month names
// var monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ];
  
//   // Get the current date
//   var currentDate = new Date();
  
//   // Get the current month (zero-based index)
//   var currentMonthIndex = currentDate.getMonth();
  
//   // Get the current month name from the array
//   var currentMonthName = monthNames[currentMonthIndex];
  
//   // Alert the current month name
//   alert("The current month is " + currentMonthName + ".");
  

//3. Write a program that alerts the first 3 letters of the current
//day, for example if today is Sunday then alert will show Sun.

// let today = new Date();
// let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let dayAbbreviation = daysOfWeek[today.getDay()];
// alert(dayAbbreviation);

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// let today = new Date();
// let dayOfWeek = today.getDay();

// if (dayOfWeek === 6 || dayOfWeek === 0) {
//   alert("It's Fun day");
// } else {
//    do nathing
// }

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
//else shows “Last days of the month”.

// let today = new Date();
// let currentDate = today.getDate();

// if (currentDate < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
//hasn't been declared beforehand. Use any variable you like to represent the Date object.

// let now = new Date();
// console.log("Current date: "+ now);




//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// const now = new Date();
// const hours = now.getHours();

// if (hours < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// let laterDate = new Date(2020, 11, 31);
// console.log("Later day: ",laterDate); // "Thu Dec 31 2020"

//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015

// // Create a Date object for the starting date of this Ramadan
// let ramadanStartDate = new Date(2023, 3, 23); 

// // Calculate the number of days since the 1st Ramadan
// let oneRamadan = new Date(2015, 5, 18);
// let timeDiff = ramadanStartDate.getTime() - oneRamadan.getTime(); // time difference in milliseconds
// let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // convert milliseconds to days

// // Alert the number of days that have passed since the 1st Ramadan
// alert("The number of days since the 1st Ramadan is: " + daysDiff);

//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the
//beginning of 2015.

// // Create Date objects for the reference date and the beginning of 2015
// const referenceDate = new Date(0); // January 1, 1970
// const beginningOf2015 = new Date('January 1, 2015');

// // Calculate the number of seconds elapsed between the two dates
// const elapsedSeconds = (beginningOf2015 - referenceDate) / 1000;

// // Output the result in the browser console
// console.log(`Seconds elapsed since the beginning of 2015: ${elapsedSeconds}`);

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// // Create a Date object for the current date and time
// const currentDate = new Date();
// console.log("current time ",currentDate)

// // Extract the hours from the Date object
// const currentHour = currentDate.getHours();

// // Reset the Date object an hour ahead
// currentDate.setHours(currentHour - 1);

// // Display the updated Date object in the browser
// console.log(`1 hour ago: ${currentDate}`);

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// // Create a Date object
// const currentDate = new Date();

// // Reset the date 100 years back
// currentDate.setFullYear(currentDate.getFullYear() - 100);

// // Display the updated date in an alert box
// alert(`Date 100 years back: ${currentDate}`);

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// // Ask the user for their age
// const age = prompt("Please enter your age:");
//console.log("your age is: ",age)

// // Calculate the birth year
// const currentYear = new Date().getFullYear();
// const birthYear = currentYear - age;

// // Display the birth year in the browser
// document.write(`Your birth year is: ${birthYear}`);

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)


// // Define constants for the charges per unit and the late payment surcharge
// const chargesPerUnit = 16;
// const latePaymentSurcharge = 350;

// // Ask the user for their name, current month, and number of units
// const name = prompt("Please enter your name:");
// const currentMonth = prompt("Please enter the current month:");
// const numberOfUnits = parseFloat(prompt("Please enter the number of units:"));

// // Calculate the net amount payable within due date and the gross amount payable after due date
// const netAmountPayable = numberOfUnits * chargesPerUnit;
// const grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// // Round the amounts to 2 decimal places
// const roundedNetAmount = netAmountPayable.toFixed(2);
// const roundedGrossAmount = grossAmountPayable.toFixed(2);

// // Display the bill details in the browser
// document.write("<h2>K-Electric Bill</h2>");
// document.write(`<p>Customer Name: ${name}</p>`);
// document.write(`<p>Current Month: ${currentMonth}</p>`);
// document.write(`<p>Number of units: ${numberOfUnits}</p>`);
// document.write(`<p>Charges per unit: ${chargesPerUnit.toFixed(2)}</p>`);
// document.write(`<p>Net Amount Payable (within Due Date): ${roundedNetAmount}</p>`);
// document.write(`<p>Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}</p>`);
// document.write(`<p>Gross Amount Payable (after Due Date): ${roundedGrossAmount}</p>`);

            //FUNCTION
 //1. Write a function that displays current date & time in your browser.

//  function displayDate() {
//     var currentDate = new Date();
//     document.write(currentDate);
//   }
  
//   displayDate();

//2. Write a function that takes first & last name and then itgreets the user using his full name.
  
// function greeting(){
//     var firstName =prompt("Enter your first name");
//     var lastName =prompt("Enter your last name");
//     var fullName = firstName + lastName;
//     document.write(`<b>Wellcome!</b> ${fullName}`)


// }
// greeting(); 

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum  (){
//     var a = 5;
//     var b = 8;
//     var add = a+b;

//     return add;
// }

// var result =sum();
// console.log(`Add a & b = ${result}`);

//4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculator(a, opr ,b){
//     if(opr === '+'){
//         return a + b;
//     }
//     else if(opr === '-'){
//         return a-b;
//     }
//     else if(opr === '*'){
//         return a*b;
//     }
//     else if(opr === '/'){
//         return a/b;
//     }


// }
//  var result = calculator(4,"*",8);
//  console.log(result);

//5. Write a function that squares its argument.

// function square(x) {
//     return x * x;
//   }
//   var result = square(5);
//   console.log(result);

//6. Write a function that computes factorial of a number.
   
// function factorial(n) {
//     if (n < 0) {
//       return "Invalid input";
//     } else if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   var result = factorial(4);
// console.log(result); // prints 120

//7. Write a function that take start and end number as inputs & display counting in your browser.

// function countNumbers(start, end) {
//     var output = "";
//     for (var i = start; i <= end; i++) {
//       output += i + " ";
//     }
//     document.write(output);
//   }
//   countNumbers(0, 10);
  
// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//       return x * x;
//     }
  
//     var baseSquared = calculateSquare(base);
//     var perpendicularSquared = calculateSquare(perpendicular);
//     var hypotenuseSquared = baseSquared + perpendicularSquared;
//     var hypotenuse = Math.sqrt(hypotenuseSquared);
  
//     return hypotenuse;
//   }
//   var hypotenuse = calculateHypotenuse(3, 4);
//   console.log(hypotenuse); // prints 5

//9. Write a function that calculates the area of a rectangle.A = width * height Pass width and height in following manner:

// //i. Arguments as value
// function calculateRectangleArea(width, height) {
//   var area = width * height;
//   return area;
// }

// // Example usage
// var width = 5;
// var height = 10;
// var area = calculateRectangleArea(width, height);
// console.log("Area:", area);

// //ii. Arguments as variables
// function calculateRectangleArea(width, height) {
//   var area = width * height;
//   return area;
// }

// // Example usage
// var widthValue = 5;
// var heightValue = 10;
// var area = calculateRectangleArea(widthValue, heightValue);
// console.log("Area:", area);

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function isPalindrome(str) {
//   // Remove non-alphanumeric characters and convert to lowercase
//   var cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

//   // Check if the clean string is equal to its reversed version
//   return cleanStr === cleanStr.split("").reverse().join("");
// }

// // Example usage
// var word = "madam";
// var isWordPalindrome = isPalindrome(word);
// console.log("Is palindrome:", isWordPalindrome);

// var stringToCheck=prompt("Enter a palindorme word");
// var len=stringToCheck.length;
         //OR
// function palindrome(stringToCheck){
// for(var i=0; i<len/2; i++){
//   // console.log(stringToCheck[len-1-i])
//   if( stringToCheck[i] !== stringToCheck[len-1-i]){
//     alert('string is not palindrome')
    
//   }
//   break;
// }
// alert('string is palindrome')
// }

// palindrome(stringToCheck);







// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalizeFirstLetter(str) {
//   // split the string into an array of words
//   var words = str.split(" ");
//   console.log(words);

//   // loop through each word and capitalize the first letter
//   for (var i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     console.log(words[i].slice(1));
//   }

//   // join the array of words back into a string and return it
//   return words.join(" ");
// }
// console.log(capitalizeFirstLetter('the quick brown fox'))
   

// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
  
// function findLongestWord(str) {
//     // Split the string into an array of words
//     var words = str.split(" ");
  
//     // Initialize variables to store the longest word and its length
//     var longestWord = "";
//     var maxLength = 0;
  
//     // Iterate over each word in the array
//     for (var i = 0; i < words.length; i++) {
//       var currentWord = words[i];
  
//       // Update the longest word and its length if the current word is longer
//       if (currentWord.length > maxLength) {
//         longestWord = currentWord;
//         maxLength = currentWord.length;
    
//       }
//     }
  
//     return longestWord;
//   }
  
//   // Example usage
//   var sentence = 'web development tutorial';
//    var longestWord = findLongestWord(sentence);
//   console.log("Longest word:", findLongestWord(sentence));

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function countOccurrences(str, letter) {
//     // Convert both the string and the letter to lowercase
//     var lowercaseStr = str.toLowerCase();
//     var lowercaseLetter = letter.toLowerCase();
  
//     // Initialize a count variable
//     var count = 0;
  
//     // Iterate over each character in the string
//     for (var i = 0; i < lowercaseStr.length; i++) {
//       var currentLetter = lowercaseStr.charAt(i);
  
//       // If the current character matches the specified letter, increment the count
//       if (currentLetter === lowercaseLetter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   // Example usage
//   var string = 'learning web&moboile development';
//   var letter = 'e';
//   var occurrences = countOccurrences(string, letter);
//   console.log("Occurrences:", occurrences);
  
// 14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference.toFixed(2));
//   }
  
//   function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     console.log("The area is " + area.toFixed(2));
//   }
  
//   // Example usage
//   var radius = 5;
//   calcCircumference(radius);
//   calcArea(radius);
  





  
  

