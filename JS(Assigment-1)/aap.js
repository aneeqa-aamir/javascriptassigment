          //ALERT

//3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Wellcome to JS Land..... \n Happy coding!");
 
//5. Generate the following message through browser’s developer console:
 alert("Hello.... I can run JS through my web broswer's console");

          //VARIABLES FOR STRINGS

//1. Declare a variable called username.
 var username =;
//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = prompt("your full name");

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
var message = "HELLO WORLD";
alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
 var name = "Aneeqa Khan";
alert(name);
var age = "i'm 28 years old";
alert(age);
var post ="certified Mobile Application development";
alert(post);

//5. Write a script to display the following alert using one JS variable:
var a ="pizza\npizz\npiz\npi\np";
alert(a);

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).
//Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email ="aneeqaaamirkhan@gmail.com";
alert("your email address"+ " " +email);

//7. Declare a variable called book & give it the value “Asmarter way to learn JavaScript”. Display the followingmessage in an alert box:
var book ="I am trying to learn from the Book A Smarter Way To Learn JavaScript ";
alert(book);

//8. Write a script to display this in browser through JS
var write = "yah! I can write HTML Content through Javascript";
document.write(write);

//9. Store following string in a variable and show in alert and browser through JS
var end ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(end);

          //VARIABLES FOR NUMBERS

//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age ="I am 29 years old";
alert(age);

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
//number of visits on your web page. For example: “You have visited this site N times”.
var visit="You have visited this website 14 times ";
alert(visit);

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birth ="My birth  year is 1995 "
document.write(birth);

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
//a. Visitor’s name
//b. Product title
//c. Quantity i.e. how many products a visitor wants to order
//Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var order="<b>john Doe</b> ordered <b>5 T-shirts</b> on XYZ clothing store";
document.write(order);

          //VARIABLE NAMES: LEGAL & ILLEGAL  
// 1. Declare 3 variables in one statement. 
let firstName = "John", lastName = "Doe", age = 30;

// 2. Declare 5 legal & 5 illegal variable names.
// Legal variable names:
var age
var name_of_person
var _address
var zipCode
var totalCost

// Illegal variable names:
// var 2numbers (starts with a number)
// var first-name (contains a hyphen)
// var !price (contains a special character)
// var my name (contains a space)
// var class (a reserved keyword)

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
var a ="<h1>Rules for naming JS variables</h1>"
document.write(a + "<br>");

// //b) Variable names can only contain ______, ______,______ and ______.
var contain ="Variable names can only contain alpha(a-z,A-Z),Numbers(0-9),Underscore(-) and characters.";
 document.write(contain +"<br>");
 

// //c) Variables must begin with a ______, ______ or_____.
  var begin = "Variables must begin with a Letter, Underscore or Number.";
   document.write(begin +"<br>");

// //d) Variable names are case _________
   var sen ="Variable names are case sensivite";
    document.write(sen +"<br>");

// //e) Variable names should not be JS _________
  var name = "Variable names should not be JS keyword";
  document.write(name + "<br>");

//         //    MATH EXPRESSIONS      
        
//  //1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.   
 var num1 =5;
var num2 =3;
var sum =num1+num2;
document.write("The sum of" +" " + num1 +" "+ "and" +" "+ num2 +" "+ "is="+ sum)

// //2. Repeat task1 for subtraction, multiplication, division & modulus.// var num1 =5;
var num2 =3;
var sub =num1-num2;
document.write("The sub of" +" " + num1 +" "+ "and" +" "+ num2 +" "+ "is="+ sub)

var num1 = 5;
var num2 = 3;
var mul =num1*num2;
document.write("The multiplication of" +" " + num1 +" "+ "and" +" "+ num2 +" "+ "is="+ mul);

var num1 = 5;
var num2 = 3;
var div =num1%num2;
document.write("The div of" +" " + num1 +" "+ "and" +" "+ num2 +" "+ "is="+ div);

var num1 =5;
var num2 =3;
var reminder = num1 % num2;
document.write( "The modules of "+ num1 +" % " + num2 + " = " + reminder + " ; ");

// //3. Do the following using JS Mathematic Expressions
// //a. Declare a variable.
var a
console.log(a);

// //b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
var a = 6;
document.write("Value after variable declaration is:" + a +"<br>");

// //c. Initialize the variable with some number.
var a = 5;
console.log(a);

// //d. Show the value of variable in your browser like “Initial value:5
var a =5 ;
document.write("Initaial value is:"+ a +"<br>");

// //e. Increment the variable.
var a = 5;
var b =++a;
document.write(b +"<br>")

// // f. Show the value of variable in your browser like “Value after increment is: 6”.
 var a =5;
 var b =++a;
 document.write("value after increment is:"+ b +"<br>");

// //g. Add 7 to the variable.
var a = 7;
var b = 6
console.log(a+b);

// //h. Show the value of variable in your browser like “Value after addition is: 13”.
  var d = 13;
 document.write("Value after addition is:"+d +"<br>");

// // i. Decrement the variable.
 var e = 13;
 console.log(--e);

//  //j. Show the value of variable in your browser like “Value after decrement is: 12”.
var e=13;
var f=--e;
document.write("value after decrement is:"+f +"<br>");

// //k. Show the remainder after dividing the variable’s value by 3.
var num1 =12;
var num2 = 3;
var reminder = num1 % num2;
document.write( "The reminder is:"+reminder +"<br>");

// //l. Output : “The remainder is : 0”.
var a = 0;
document.write("The remainder is :" + a +"<br>")

// //4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost 
// //of buying 5 tickets to a movie. Example output:
var price =600;
var tickets =5;
var multiplication = price*tickets;
document.write("Total Cost TO Buy" +" "+tickets+ " "+ "Tickets To A Movie is " + multiplication +"PKR" +"<br>")

// //5. Write a script to display multiplication table of any number in your browser.
var a =4;
document.write(a +"x1=" +4+ "<br>");
document.write(a +"x2=" +8+"<br>");
document.write(a +"x3=" +12 +"<br>");
document.write(a +"x4=" +16 +"<br>");
document.write(a +"x5=" +20+"<br>");
document.write(a +"x6=" +24+"<br>");
document.write(a +"x7=" +28+"<br>");
document.write(a +"x8=" +32+"<br>");
document.write(a +"x9=" +36+"<br>");
document.write(a +"x10=" +40 +"<br>");

// // 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// // a. Store a Celsius temperature into a variable.
// // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// // c. Now store a Fahrenheit temperature into a variable.
// // d. Convert it to Celsius & output “NNoF is NNoC”.
var cel = 25;
var far = 70;
var celIntoFar= cel * 9/5 +32;
var farIntoCel = (far - 32 )* 5/9
document.write( cel +" is " + celIntoFar + "<br>")
document.write( far +" is"+ farIntoCel)

// // 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// // a. Price of item 1
// // b. Price of item 2
// // c. Ordered quantity of item 1
// // d. Ordered Quantity of item 2
// // e. Shipping charges
var price1 =650;
var price2 =100;
var quantity1 =3;
var quantity2 =7;
var totalCost1 = price1*quantity1;
var totalCost2 =price2*quantity2;
var totalCost = totalCost1+totalCost2;
document.write("price of item 1 is"+price1 +"<br>");
document.write("Quantity of item 1 is"+quantity1 +"<br>");
document.write("price of item 2 is"+price2 +"<br>");
document.write("Quantity of item 2 is"+quantity2 +"<br>");
document.write("Shipping charges"+100 +"<br>");
document.write("Total cost of your order"+totalCost);

// //8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var marksSheet ="<h1>MARKS SHEET</h1>"
document.write(marksSheet);
var totalmarks =980;
var obtainedmarks =804;
var percentage =(obtainedmarks/totalmarks)*100;
document.write("TOTAL MARKS:"+totalmarks +"<br>");
document.write("OBTAINED MARKS:"+obtainedmarks+"<br>");
document.write("PERCENTAGE:" + percentage+"<br>");

// //9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// //Perform all calculations in a single expression.
var currency="<h1>Currency in PKR</h1>";
document.write(currency);
var dollars =10;
var Riyals =25;
var dollarsIntoPak=10*104.80;
var RiyalsIntopak=25*28;
var pkr=dollarsIntoPak+RiyalsIntopak;
document.write( "Total Currency in PKR" +" "+ pkr);

// //10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// // a. Add 5
// // b. Multiply by 10
// // c. Divide the result by 2
// //perform all calculations in a single expression
var a =+5*10/2;
console.log(a);

// // 11. The Age Calculator: Forgot how old someone is?Calculate it!
// // a. Store the current year in a variable.
// // b. Store their birth year in a variable.
// // c. Calculate their 2 possible ages based on the stored values.
var age ="<h1>Age Calculator</h1>"
document.write(age);
var current=+prompt("Enter current year");
var birth=+prompt("Enter your birth year");
var calculate = current-birth;
document.write("your age="+calculate);

// // The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?Wonder no more.
// // a. Store your favorite snack into a variable
// // b. Store your current age into a variable.
// // c. Store a maximum age into a variable.
// // d. Store an estimated amount per day (as a number).
// // e. Calculate how many would you eat total for the rest of your life.
var favorite_snack = "chocolate chip";
document.write("favorite_snack:" +faovrite_snack +"<br>");
var current_age = 15;
document.write("Current_age:"+current_age+"<br>");
var maximum_age = 65;
document.write("Maximum_age:"+maximum_age +"<br>"); 
var amount_per_day = 3;
document.write("Amount_per day:"+amount_per_day+"<br>");
var years_remaining = maximum_age - current_age;
var days_remaining = years_remaining * 365;
var lifetime_supply = days_remaining * amount_per_day;
document.write("You will consume a total of " + lifetime_supply + " " + favorite_snack + " for the rest of your life.");

//                  //MATH EXPRESSIONS
// //1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:              
var a = 10;
var b =++a;
document.write("The value of ++a is:"+b +"<br>");
document.write("Now the value of a is:"+b+"<br>");
var b = ++a;
document.write("The value of ++a is:"+ 11 +"<br>") ;
document.write("Now the value of a is:"+b+"<br>");
var b =--a;
document.write("The value of --a is:"+b +"<br>");
document.write("Now the value of a is:"+b+"<br>");
var b = --a;
document.write("The value of --a is:"+ 11 +"<br>") ;
document.write("Now the value of a is:"+b+"<br>");
document.write("----------------------------------"+"<br>");
document.write("Result:<br> The value of a is:"+a);

// // 2. What will be the output in variables a, b & result after execution of the following script:
// // var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// --a;The '--' operator before 'a' decrements its value by 1, so 'a' becomes 1.
// --a - --b;The '--' operator before 'b' decrements its value by 1, so 'b' becomes 0. Then the expression '--a - --b' becomes 1 - 0, which is equal to 1.
// --a - --b + ++b;The '++' operator before 'b' increments its value by 1, so 'b' becomes 1. Then the expression '--a - --b + ++b' becomes 1 - 0 + 1, which is equal to 2.
// --a - --b + ++b + b--;The '--' operator after 'b' decrements its value by 1, so 'b' becomes 0. Then the expression '--a - --b + ++b + b--' becomes 1 - 0 + 1 + 1, which is equal to 3.

// So, the final values of 'a', 'b', and 'result' are 1, 0, and 3, respectively.
//  var a =1;
 document.write("a="+a+"<br>");
 var b =0;
 document.write("b="+b+"<br>");
 var Result =3;
 document.write("Result="+Result+"<br>");

// //3. Write a program that takes input a name from user & greet the user.
var name =prompt("Please enter your name: ");
document.write("Hello,"+name+ "! Nice to meet you.");

// 5.Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.


// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var subject1 = "English";
var subject2 = "Urdu";
var subject3 = "Math";
var totalMarks = 100;
var marks1 = 54;
var marks2 = 48;
var marks3 = 54;
var totalObtainedMarks = marks1 + marks2 + marks3;
var percentage1 = (marks1 / totalMarks) * 100;
var percentage2 = (marks2 / totalMarks) * 100;
var percentage3 = (marks3 / totalMarks) * 100;
var totalpercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + percentage1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + percentage2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + percentage3 + "%</td></tr>");
document.write("<tr><td>Total</td><td>" + totalMarks * 3 + "</td><td>" + totalObtainedMarks + "</td><td>" + totalpercentage + "%</td></tr>");
document.write("</table>");







































 





