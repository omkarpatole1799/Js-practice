//this code is for bmi calculator

function bmiCalcualte(weight,height){
    return (weight/(height*height));
}

//weight should be in kg
//height should be in meters

//calling the function
var bmi= Math.round(bmiCalcualte(65,1.9));

//printing the output
console.log("Your bmi is: " + bmi);