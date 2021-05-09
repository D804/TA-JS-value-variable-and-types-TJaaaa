// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/


let number = Number(prompt("enter the value"));
 if(number % 2 === 0){
     alert("even number");
     }else{
         alert("odd number");
        }


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt ("enter first number"));
let num2 = Number(prompt ("enter second number"));
if(num1 > num2){
   alert(`Max value= ${num1}`);
   }else{
    alert(`Max value= ${num2}`);
   }

// 3. Convert the above code using`?` terniary operator

num1 > num2 ? alert(`Max value= ${num1}`): alert(`Max value= ${num2}`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let housename =  prompt("enter the housename");
if(housename == "stark"){
alert( " Winter is coming");
}
else if(housename == "lannister"){
alert(" A lannister always pays his debt")
}
else{
alert(" All men must die");
}

// 5. Convert the above code using`?` terniary operator
let housename =  prompt("enter the housename");
housename == "stark" ? alert( " Winter is coming"):
housename == "lannister" ? alert(" A lannister always pays his debt") :alert(" All men must die");


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.


let month =Number(prompt("enter the month"));
switch(month){
    case 1:
      alert(" january= 31 days");
      break;
 
 case 2:
      alert(" feb= 28 days");
      break;
 case 3:
      alert(" march= 31 days");
      break;
 case 4:
      alert(" april= 30 days");
      break;
 case 5:
      alert(" may= 31 days");
      break;
 case 6:
      alert("jun= 30 days");
      break;
 case 7:
      alert("july= 31 days");
      break;
case 8:
      alert(" august= 31 day");
      break;
 case 9:
      alert(" sep= 30 day");
      break;
 case 10:
      alert(" oct= 31 days");
      break;
 case 11:
      alert("  nov= 30 days");
      break;
 case 12:
      alert(" dec= 31 days");
      break;
    default:
    alert("Enter a valid month");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/

let salery = Number(prompt("enter the salery"));
switch(true){
    case  salery<=20000 :
         let tax =(salery*10) /100
      alert(`in hand salery is ${salery-tax}`);
      break;
      case  salery<=40000 :
          let tax =(salery*20) /100
       alert(`in hand salery is ${salery-tax}`);
       break;
       case  salery > 50000 :
          let tax =(salery*30) /100
       alert(`in hand salery is ${salery-tax}`);
       break;
       default:
       alert("Enter a valid amount");
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let mark =Number(prompt("enter a marks"));
 if(mark>100){
alert("mark cant be greater than 100");
 }
else if(mark>80 && mark<100){
alert("grade A");
}
else if(mark>50 && mark <80){
alert("grade A");
}
else if(mark>30 && mark<50){
alert("grade C");
}

else {
  alert("grade D");
}

//switch
let mark =Number(prompt("enter a marks"));
switch(true){
     case (mark>100):
          alert("marks cant be greater than 100");
          break;
     case ( mark>80 && mark < 100):
          alert("A");
          break;
     case ( mark > 50 && mark < 80):
         alert("B");
         break;
     case ( mark > 30 && mark < 50):
          alert("C"); 
          break; 
     default:
               alert("D"); 
               break;
     
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("enter a condition");
 if(weather == "sunny"){
alert("Wear a T-shirt");
 }
else if(weather == "rainy"){
alert("Don't forget to take your raincoat");
}
else if(weather == "hot"){
alert("Get a hanky");
}
else if(weather == "freezing"){
alert("Get your sweeter on");
}

else {
  alert("not a valid input");
}
//switch
let weather =prompt("enter a weather condition");
switch(true){
     case (weather == "sunny"):
          alert("Wear a T-shirt");
          break;
     case ( weather == "rainy"):
          alert("Don't forget to take your raincoat");
          break;
     case ( weather == "hot"):
          alert("Get a hanky");
         break;
     case ( weather == "freezing"):
          alert("Get your sweeter on");
          break; 
     default :
     alert("not a valid input");
}
