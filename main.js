// question 1
// take input from user and alert if number is proper number or not 

var num = prompt('Enter Any Number');
num = parseInt(num);

if(isNaN(num)){
    alert("Not a Proper Number");
}else{
    alert('its a proper number');
}

// question 2
// take input from user and alert if Number is even or odd 

var num = prompt('Enter a number');
num = parseInt(num);

if(num % 2 == 0){
    alert('It is even number')
}else{
    alert('it is odd number');
}

// question 3 
// take inputs and operator from user and calculated value 

var num1 = prompt('Enter first Number');
var num2 = prompt('Enter Second Number');
num1 = parseInt(num1);
num2 = parseInt(num2);
var opertor = prompt('Enter an Operator (+, - , * , /)');

if (opertor === '+') {
    var sum = num1 + num2;
    alert("The Sum Value Is :" + " " + sum);
} else if (opertor === '-') {
    var diff = num1 - num2;
    alert("The Difference Value Is :" + " " + diff);
} else if (opertor === '*') {
    var product = num1 * num2;
    alert("The Product Value Is :" + " " + product);
} else if (opertor === '/') {
    var quotient = num1 / num2;
    alert('The divide value is :' + " " + quotient);
}  else {
    alert('Invalid Operator Please Enter Correct One (+, - , * , /)');
}

// question 4
// take user name and alert user with greeting message 

var greetingMessage  = "Hello ";
var userName = prompt('Please enter your Name:');
alert(greetingMessage + userName);