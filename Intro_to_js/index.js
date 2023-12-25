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