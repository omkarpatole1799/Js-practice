//You can check the karel robot website here and try running following code
//https://stanford.edu/~cpiech/karel/ide.html

//This is the main function
function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();    
}

//this function allows the robot to move fourtimes forward
function moveFourTimes(){
    move();
    move();
    move();
    move();
}

//this function is to move the karel into diagonal form and put beeper
function moveAndPutBeep(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();  
 }

 