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






function bottleSong () {
  var  num = 99;
  while (num >= 1){
   console.log (num + " bottles of beer on the wall, " + num + " bottles of beer."+
      " Take one down and pass it around, " + (num-1) + " bottles of beer on the wall.");
      num--; 
  }
  console.log ("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}






