var myName = "harsika";
alert(myName);
var yourName = prompt("What is your name??");
alert("hii"+ " " + yourName);



var gameLevel = 1;
gameLevel = 3;
gameLevel = 5;
alert("your current gamelevel is: " +gameLevel);



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
alert (messsage+" "+yourName);



var totalCharacter = 240;
var tweet = prompt("Enter your tweet");
alert("you have written "+(tweet.length)+" characters and you are left with "+(totalCharacter-tweet.length)+" characters.");



var tweet = prompt("Enter your tweet that should only be of 240 characters and not more then that:");
var yourTweet = tweet.slice(0,240);
alert("your tweet is: "+yourTweet);
// or
alert(prompt("Enter your tweet that should only be of 240 characters and not more then that:").slice(0,240));



var userName = prompt("Enter your name:");
alert("hello" +" " + userName.slice(0,1).toUpperCase() + userName.slice(1,userName.length).toLowerCase());



var dogAge = prompt("Enter your dog's age:");
var humanAge = ((dogAge-2)*4)+21;
alert("The dog is " + humanAge + " years old in human years");



function main(){
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



 function main(){
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
        var numberOfBottle = money/1.5;
        console.log(numberOfBottle);
    }
    
    numBottles(10); //6.666666666666667

    function numBottles(money) {
        var numberOfBottle = money/1.5;
        console.log(Math.floor(numberOfBottle));
    }
    
    numBottles(10); //6


    function lifeInWeeks(age) {

            //Write your code here.
            var daysLeft = (90-age)*365;
            var weeksLeft = (90-age)*52;
            var monthsLeft = (90-age)*12;
            console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");

             }
        
        lifeInWeeks(56); //You have 12410 days, 1768 weeks, and 408 months left.



function bmiCalculator(weight,height) {
    var calcBmi =Math.round(weight/Math.pow(height,2));
       return calcBmi;
       
   }
   var bmi = bmiCalculator(65, 1.8); 
   console.log(bmi); //20
        


   var n = Math.random();
n *= 6;
n = Math.floor(n)+1;
console.log(n);
        

prompt("Give the first number");
prompt("Give the second number");
var n = Math.random();
n *= 100;
n = Math.round(n)+1;

if (n > 70) {
alert("Your love score is " + n + ", you love each other like romio and juliet");
}
    if (n > 30 && n < 70) {
        alert("Your love score is " + n );
    }
else{
    alert("Your love score is " + n + ", you go with each other like oil and water");
}