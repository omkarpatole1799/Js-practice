//this code is for bmi calculator

function bmiCalcualte(weight,height){

    let bmi = (weight/(height*height));

    //various conditions
    if (bmi<18.5){
        alert("Your BMI is: " + bmi + ", so you are underwright.");
    }
    if (bmi < 18.5 && bmi >24.9) {
        alert("Your BMI is: " + bmi + ", so you have normal weight.");
    }
    if (bmi > 24.9) {
        alert("Your BMI is: " + bmi + ", so you are overweight.");
    }
    return bmi;  
}

//weight should be in kg
//height should be in meters

//calling the function
var bmi= Math.round(bmiCalcualte(65,1.9));

