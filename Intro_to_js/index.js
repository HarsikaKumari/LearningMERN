var myName = "harsika";
alert(myName);
var yourName = prompt("What is your name??");
alert("hii" + " " + yourName);

var gameLevel = 1;
gameLevel = 3;
gameLevel = 5;
alert("your current gamelevel is: " + gameLevel);

function test() {
  var a = "3";
  var b = "8";

  var c = b;
  b = a;
  a = c;

  console.log("a is " + a);
  console.log("b is " + b);
}

var messsage = "hello";
var yourName = prompt("Enter your name here:");
alert(messsage + " " + yourName);

var totalCharacter = 240;
var tweet = prompt("Enter your tweet");
alert(
  "you have written " +
    tweet.length +
    " characters and you are left with " +
    (totalCharacter - tweet.length) +
    " characters."
);

var tweet = prompt(
  "Enter your tweet that should only be of 240 characters and not more then that:"
);
var yourTweet = tweet.slice(0, 240);
alert("your tweet is: " + yourTweet);
// or
alert(
  prompt(
    "Enter your tweet that should only be of 240 characters and not more then that:"
  ).slice(0, 240)
);

var userName = prompt("Enter your name:");
alert(
  "hello" +
    " " +
    userName.slice(0, 1).toUpperCase() +
    userName.slice(1, userName.length).toLowerCase()
);

var dogAge = prompt("Enter your dog's age:");
var humanAge = (dogAge - 2) * 4 + 21;
alert("The dog is " + humanAge + " years old in human years");

function main() {
  //your code here
  putBeeper();
  move();
  turnLeft();
  move();
  putBeeper();
  movePutBeeper();
  movePutBeeper();
  movePutBeeper();
}

function movePutBeeper() {
  turnRight();
  move();
  turnLeft();
  move();
  putBeeper();
}

function main() {
  //your code here

  beeperMove2();
  beeperMove2();
  beepeerTlMTlM();
  beeperMove2();
  beeperMTrMTr();
  beeperMove2();
  beeperMove2();
  beepeerTlMTlM();
  beeperMove2();
  beeperMTrMTr();
  beeperMove2();
  beeperMove2();
  putBeeper();
}

function beeperMove2() {
  putBeeper();
  move();
  move();
}

function beepeerTlMTlM() {
  putBeeper();
  turnLeft();
  move();
  turnLeft();
  move();
}
function beeperMTrMTr() {
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
}

function numBottles(money) {
  var numberOfBottle = money / 1.5;
  console.log(numberOfBottle);
}

numBottles(10); //6.666666666666667

function numBottles(money) {
  var numberOfBottle = money / 1.5;
  console.log(Math.floor(numberOfBottle));
}

numBottles(10); //6

function lifeInWeeks(age) {
  //Write your code here.
  var daysLeft = (90 - age) * 365;
  var weeksLeft = (90 - age) * 52;
  var monthsLeft = (90 - age) * 12;
  console.log(
    "You have " +
      daysLeft +
      " days, " +
      weeksLeft +
      " weeks, and " +
      monthsLeft +
      " months left."
  );
}

lifeInWeeks(56); //You have 12410 days, 1768 weeks, and 408 months left.

function bmiCalculator(weight, height) {
  var calcBmi = Math.round(weight / Math.pow(height, 2));
  return calcBmi;
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi); //20

var n = Math.random();
n *= 6;
n = Math.floor(n) + 1;
console.log(n);

prompt("Give the first number");
prompt("Give the second number");
var n = Math.random();
n *= 100;
n = Math.round(n) + 1;

if (n > 70) {
  alert(
    "Your love score is " + n + ", you love each other like romio and juliet"
  );
}
if (n > 30 && n < 70) {
  alert("Your love score is " + n);
} else {
  alert(
    "Your love score is " + n + ", you go with each other like oil and water"
  );
}

function bmiCalculator(weight, height) {
  var caclBmi = weight / Math.pow(height, 2);

  if (caclBmi <= 18.5) {
    return "Your BMI is " + caclBmi + ", so you are underweight.";
  }

  if (caclBmi >= 18.5 && caclBmi <= 24.9) {
    return "Your BMI is " + caclBmi + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + caclBmi + ", so you are overweight.";
  }
}

function isLeap(year) {
  //Write your code here.

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}

var guestName = ["ashok", "alok", "vivek", "tarun", "prithvi", "sheetal"];
var userName = prompt("Enter your name:");

if (guestName.includes(userName)) {
  alert("Welcome");
} else {
  alert("Sorry, may be next time");
}

var output = [];
var count = 1;
function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzbuzz");
  } else if (count % 3 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}



function whosPaying(names) {
  //Write your code here.
  var numberOfPersons = names.length;
  numberOfPersons = Math.floor(Math.random()* 10) % numberOfPersons;
  var nameOfPerson = names[numberOfPersons];
  return nameOfPerson + " is going to buy lunch today!";
}


var output = [];
var count = 1;
function fizzBuzz() {
    while(count <= 100) {
        
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzbuzz");
  } else if (count % 3 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(count);
  }
  count++;
    }
  console.log(output);
}



function bottleSong () {
  var  num = 99;
  while (num >= 1){
   console.log (num + " bottles of beer on the wall, " + num + " bottles of beer."+
      " Take one down and pass it around, " + (num-1) + " bottles of beer on the wall.");
      num--; 
  }
  console.log ("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}



var output = [];
function fizzBuzz() {
     
    for(var count = 100; count > 0; count--) {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzbuzz");
  } else if (count % 3 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(count);
  }
    }
  console.log(output);
}


function fibonacciGenerator (n) {

      //Write your code here:
      var output = [];
      
      if (n === 1) {
          output = [0];
      }
      else if(n === 2) {
          output = [0,1];
      }
      else {
          output = [0,1];
          for(var i = 2; i < n; i++) {
              
              output.push(output[output.length - 2] + output[output.length - 1]);
          }
          }
      return output; 
  }
  
  output = fibonacciGenerator (7);
  console.log(output);