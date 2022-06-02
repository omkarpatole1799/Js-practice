//taking user input
var tweet = prompt("Tweet Here!");

//counting length of tweet using .length function
var tweetLength = tweet.length;

//printing the length of tweet and remaining characters
alert("You have written " + tweetLength + " characters, you are left with " 
+ (140-tweetLength) + " characters!");