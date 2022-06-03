console.log("99 water bottle song");

noOfBottle = 99;

while(noOfBottle >= 1) {
    var bottleWord = "bottles";

    if (noOfBottle === 1) {
        var bottleWord = "bottle";
    } 

    console.log(noOfBottle + " " + bottleWord + " of water on the wall");
    console.log(noOfBottle + " " + bottleWord + " of water");
    console.log("take one down pass it around");
    noOfBottle--;

    
    console.log(noOfBottle + " " + bottleWord + " of water on the wall");

    if (noOfBottle === 0) {
        console.log("Buy 99 water bottles again");
    }
}