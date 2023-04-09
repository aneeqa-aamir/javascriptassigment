         //ARRAYS AND LOOP
//1. Declare and initialize an empty multidimensional array.(Array of arrays)
//let myArray = [[]];

//2. Declare and initialize a multidimensional array representing the following matrix:

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

//3. Write a program to print numeric counting from 1 to 10.
// for(let i=1; i<=10; i++){
//     document.write(i + '<br>')
//  }

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be
// taken as an input from user.
// let num =parseInt(prompt("Enter a number to show its multiplication table"));
// let length =parseInt(prompt("Enter length multiplication table"));
// for(let i=1; i<=length; i++) {
//     let result = num * i;
//     document.write(num + "x" + i + "=" + result + "<br>");
    
// }

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
// let fruits =['apple', 'banana', 'mango', 'orange','strawberry'];
// document.write(fruits+ '<br>' + '<br>')
// for(let i=0; i<fruits.length; i++) {
//      document.write("Element at index of"+ " "+ i +fruits[i]+'<br>');
    
// }

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write('<b>counting:</b> <br>')
// for(let count=1; count<=15; count++){
//     document.write(count +',' + ' ')
// }

// document.write('<br><br> <b>reverse counting:</b> <br>')
// for(let revCount=10; revCount>=0; revCount-- ){
//     document.write(revCount+','+ ' ')
// }

// document.write('<br><br> <b>even:</b> <br>')
// for(let even=2; even<=20; even+=2){
//     document.write(even + ',' + ' ')
// }

// document.write('<br><br><b>odd:</b> <br>')
// for(let odd=1; odd<20; odd+=2){
//     document.write(odd + ','+ ' ')
// }

// document.write('<br><br><b>series:</b> <br>')
// for(let ser=2; ser<=20; ser+=2){
//     document.write(ser + 'k,' +' ')
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. 

// let a =prompt("Enter item");
// let item=["cake", "apple pie", "cookie", "chips", "patties"];
// let itemAvailable=false;

// for(i=0; i<=item.length; i++){
//     if(a === item[i]){
//         itemAvailable=true;
//         alert(item[i]+' '+ 'is available index'+' '+i)
//     }
// }
// if(!itemAvailable){
//     alert("item is not available")
// }

//8. Write a program to identify the largest number in the given array.
// let largestNum =Math.max (24, 53, 78, 91, 12);
// document.write("The largest num is"+largestNum +"<br>")

//9. Write a program to identify the smallest number in the given array.
// let smallestNum =Math.min(24, 53, 78, 91, 12);
// document.write("The smallest num is"+smallestNum)

        //   STRING METHODS
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.
//  Greet the user using his full name.

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = firstName+lastName;
// alert('CONGRATULATION'+ ' '+fullName)

//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// let input = prompt("Enter your favorite mobile phone and model");
// document.write(input +"<br>"+"length of string"+ input.length);

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// let word= "Pakistani";
// let index = word.indexOf("n");
// document.write("string;"+ word +'<br>');
// document.write('Index of "n"'+ index)

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// let word = "Hello world";
// let index =word.lastIndexOf("l");
// document.write('string;'+word+'<br>');
// document.write("Index of 'l':"+index );

//6. Repeat Q1 using string concat() method.


//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// let word = "Hyderabad";
// document.write('city:'+ word + '<br>')
// let replaceWord = word.replace('Hyder','Islam');
// document.write('After replace word:'+ replaceWord)

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// document.write('<b>Before replace:</b>'+message + '<br>');
// var replaceMessage = message.replace(/and/g,'&');
// document.write('<b>After replace:</b>' +replaceMessage)

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// let value ="472";
// let type ='string';
// document.write('value:' +value +'<br>'+ 'type:' +type +'<br>')
// let num =472;
// let type2 = "number";
// document.write('value:'+ num + '<br>' + 'type:'+type2)

//10. Write a program that takes user input. Convert and show the input in capital letters.

// let input = "peanuts";
// document.write('Input:'+input +"<br>");
// let upperCase = input.toLocaleUpperCase();
// document.write("Upper case:"+upperCase);

//11. Write a program that takes user input. Convert and show the input in title case.

// let input = "javascript";
// document.write('Input:'+ input+'<br>');
// let tittleCase =input.tittleCase();
// document.write("Tittle case:"+tittleCase)

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// document.write("Number:"+num +'<br>');
// var string ="3536";
// document.write('Result:'+string);

//13.Write a program to take user input and store username in a variable. If the username contains any special symbol
//among [@ . , !], prompt the user to enter a valid username.
// let username = prompt("Enter your name");
// if(username === ascii('33,44,46,64')){
//         alert("please enter without symbol")
// }
// else{
//         alert('your name is'+username)
// }

// 14. You have an arrayA = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in anarray. After searching, prompt the user whether the given
// item is found in the list or not.Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInp(ut = prompt("Enter an item to search:");

// let found = false;

// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert(userInput +" is found in the list.");
// } else {
//   alert(userInput + " is not found in the list.");
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let password = prompt("Please enter a password that contains at least 6 characters, including alphabets and numbers, and does not start with a number:");
// let containNumber = /[0-9]/.test(password);
// let containAlphabets =/[a-zA-Z]/.test(password);
// if(!containAlphabets || !containNumber){
//         alert("password should contain both alphabets & number");
// }
// else if(!isNaN (password[9])){
//         alert("password should not start with number");
// }
// else if (password.length < 6){
//         alert("password should be at least 6 character long")
// }
// else {
//         alert("password is valid")
// }

//16. Write a program to convert the following string to an array using string split method.
//  let university =['university of karachi'];
//  let split = university.split("");
//  for ( let i=0; i<split.length; i++){
//         document.write(split[i]);
//  }

//17. Write a program to display the last character of a user input.

// let word = prompt('Enter word');
// let lastChar = word.charAt(word.length -1);
//  document.write(lastChar +' '+'is a last character of ' +word)

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var str = "The quick brown fox jumps over the lazy dog";
// var count = str.match(/the/gi).length;

// console.log("The word 'the' appears", count, "times in the string.");


















































































