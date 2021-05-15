// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = Number(prompt("Enter your age"));
if(age>=12 && age<=55){
  alert("You can participate in the marathon");
}else if(age>=4 && age<=11){
  alert(" You are too young to participate in the marathon");
}else if(age<4 ){
  alert(" Hey Kiddo! Can You Walk ?");

}else{
  alert(" You are too old to participate in the marthon");;
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
let integer = +prompt("enter the number");
let firstLetter ="h";
let lastLetter ="llo";
let middleLetter ="";
for(let i=0; i<integer; i++){
  middleLetter+="e";

}
alert(firstLetter+middleLetter+lastLetter);



// [Your code goes here]

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let naturalNo =+prompt("Enter the number");
let sum =0;
for(let a=1;a<=naturalNo;a++){
  sum+=a;
}
alert(sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let number =+prompt("enter the number");
switch(true){
  case(number ==1):
  alert("number is equal to ONE");
  break;
  case(number ==2):
  alert("number is equal to TWO");
  break;
  case(number ==3):
  alert("number is equal to THREE");
  break;
  case(number ==4):
  alert("number is equal to FOUR");
  break;
  case(number ==5):
  alert("number is equal to FIVE");
  break;
  case(number ==6):
  alert("number is equal to SIX");
  break;
  case(number ==7):
  alert("number is equal to SEVEN");
  break;
  case(number ==8):
  alert("number is equal to EIGHT");
  break;
  default:
    alert("PLEASE TRY AGAIN")
}
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks =+prompt("enter the number");
switch(true){
  case(marks >90 &&marks <=100):
  alert("Grade is equal to AA");
  break;
  case(marks >80 && marks<=90):
  alert("Grade is equal to AB");
  break;
  case(marks >70 && marks<=80):
  alert("Grade is equal to BB");
  break;
  case(nmarks >60 && marks<=70):
  alert("Grade is equal to BC");
  break;
  case(marks>50 && marks<=60):
  alert("Grade is equal to CC");
  break;
  case(marks >40 && marks<=50):
  alert("Grade is equal to CD");
  break;
  case(marks >30 && marks<=40):
  alert("Grade is equal to DD");
  break;
  case(marks <30):
  alert("Grade is equal to DD");
  break;
  default:
    alert("Enter a valid number");
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let integer1 =+prompt("enter a first number");
let integer2 =+prompt("enter a second number");
switch(true){
  case(integer1 >integer2):
  alert(`largest among two ${integer1}`);
  break;
  default:
    alert(`largest among two ${integer2}`);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
const firstNumber =+prompt("Enter the first number");
const secondNumber =+prompt("Enter the second number");
const thirdNumber =+prompt("Enter the first number");
let product = firstNumber*secondNumber*thirdNumber;
if(product > 0){
  alert("The value is positive");
}else{
  alert("The value is negative");
}



/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/
let firstNumber = +prompt("Enter a first value");
let secondNumber = +prompt("Enter second value");
let operation = prompt("Enter the operation ")
switch(operation){
case( "Add"):
  alert(`The sum of ${firstNumber}and sum of ${secondNumber} is ${firstNumber+secondNumber} `);
break;
  case("Sub"):
  alert(`The substraction of ${firstNumber}and substraction of ${secondNumber} is ${firstNumber-secondNumber} `);
break;
  case("Division"):
  alert(`The Division of ${firstNumber}and  Division of ${secondNumber} is ${firstNumber/secondNumber} `);
break;
case("Multiplication"):
  alert(`The Multiplication of ${firstNumber}and Multiplication of ${secondNumber} is ${firstNumber*secondNumber} `);
break;
default:
  alert("Enter a valid input");
}
// [Your code goes here]
