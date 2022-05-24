var userName = prompt("Enter your name: ");

//isolating first letter of user name
var firstLetter = userName.slice(0,1);

//capitalizing first letter

var firstCharUpperCase = firstLetter.toUpperCase();

//isolating rest of the char from the name

var restOfTheName = userName.slice(1,userName.length);
restOfTheName = restOfTheName.toLowerCase();

//concatning 

var finalName = firstCharUpperCase + restOfTheName;

//final message
alert("Hello " + finalName);
